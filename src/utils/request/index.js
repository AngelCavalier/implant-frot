// 在http.js中引入axios
import axios from "axios";
import QS from "qs";
// 设置超时时间
axios.defaults.timeout = 10000;
// 设置默认post的请求头
axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

// 添加token 在登录成功后进行设置
export function setToken(token) {
  axios.defaults.headers.common["Authorization"] = "Bearer " + token;
}

// 默认请求地址 
const baseUrl = 'http://localhost:8080'

export default {
  /**
* get方法，对应get请求
* @param {String} url [请求的url地址]
* @param {Object} params [请求时携带的参数]
*/
  get(url, params) {
    return new Promise((resolve, reject) => {
      axios
        .get(baseUrl + url, {
          params: params,
        }, {
          headers: {      //请求头
            "Content-Type": "application/json",
          },
          async: false,
        })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  /**
* post方法，对应post请求
* @param {String} url [请求的url地址]
* @param {Object} data [请求时携带的参数]
*/
  post(url, data) {
    data = QS.stringify(data)  //post需要序列化
    return new Promise((resolve, reject) => {
      axios
        .post(baseUrl + url, data, {
          async: false
        })
        .then(res => {
          if (res.status >= 200 && res.status <= 300) {
            resolve(res.data);
          } else {
            console.log(res);
            this.$message({
              message: res.data.msg,
              type: 'warning'
            })
          }
        })
        .catch(err => {
          this.$message.error('服务器开小差了~');
          reject(err);
        });
    });
  }
}
