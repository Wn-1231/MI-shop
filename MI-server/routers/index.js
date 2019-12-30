var express = require('express');
var jwt = require('jsonwebtoken')
var router = express.Router();
const md5 = require('blueimp-md5')
const UserModel = require('../models/UserModel')
const _filter = {'pwd': 0, '__v': 0} // 查询时过滤掉
const createToken = require('../token/createToken')

const test = require('./test')
test(router)

/*
例子
 */
// router.get('/position/:geohash', function(req, res) {
//   const {geohash} = req.params
//   ajax(`http://cangdu.org:8001/v2/pois/${geohash}`)
//     .then(data => {
//       res.send({code: 0, data})
//     })
// })

/* 写自己的接口 */
//home 的推荐recommend首页数据
let homeRecommend = require('../data/home.json')
router.get("/homeRecommend",function(request,response){
    let data = homeRecommend
    response.send(data)
})

//home 的搜索数据
let homeSearch = require('../data/search.json')
router.get("/homeSearch",function(request,response){
    let data =homeSearch
    response.send(data)
})










/*
密码登陆
 */
router.post('/login_pwd', function (req, res) {
  const name = req.body.name
  const pwd = md5(req.body.pwd)
  const captcha = req.body.captcha.toLowerCase()
  // console.log('/login_pwd', name, pwd, captcha)

  // 可以对用户名/密码格式进行检查, 如果非法, 返回提示信息
  if (captcha !== req.session.captcha) {
    return res.send({code: 1, msg: '验证码不正确'})
  }
  // 删除保存的验证码
  delete req.session.captcha

  UserModel.findOne({name})
    .then((user) => {
      if (user) {
        if (user.pwd !== pwd) {
          res.send({code: 1, msg: '用户名或密码不正确!'})
        } else {
          res.send({
            code: 0, 
            data: {
              _id: user._id, 
              name: user.name, 
              phone: user.phone,
              token: createToken(user._id)
            }
          })
        }
        return new Promise(() => {

        }) // 返回一个pending状态的promise对象
      } else {
        return UserModel.create({name, pwd})
      }
    })
    .then((user) => {
      const data = {
        _id: user._id,
        name: user.name,
        token: createToken(user._id)
      }
      // 3.2. 返回数据(新的user)
      res.send({code: 0, data})
    })
    .catch(error => {
      console.error('/login_pwd', error)
    })
})

/*
根据请求携带的token查询对应的user
 */
router.get('/auto_login', function(req, res) {
  // 得到请求头中的token
  const token = req.headers['authorization']
  
  // 如果请求头中没有token, 直接返回
  if (!token) {
    return res.send({code: 1, msg: '请先登陆'})
  }
  
  // 解码token, 如果失败或过了有效期, 返回401
  const decoded = jwt.decode(token, 'secret')
  if (!decoded || decoded.exp < Date.now() / 1000) {
    res.status(401)
    return res.json({ message: 'token过期，请重新登录' })
  }

  // 根据解码出的用户id, 查询得到对应的user, 返回给客户端
  const userId = decoded.id
  UserModel.findOne({ _id: userId }, _filter)
    .then(user => {
      res.send({code: 0, data: user})
    })
})


module.exports = router;