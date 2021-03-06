/*
 * @Author: Dad
 * @Date: 2020-07-15 09:41:09
 * @LastEditors: Dad
 * @LastEditTime: 2020-07-29 16:31:52
 */
import request from '@/utils/request';

/**
 * @name: 获取App
 * @param {}
 */
export async function getApp() {
  return request('/application/searchApplication', {
    method: 'POST',
  });
}
/**
 * @name: 删除App
 * @param {data}
 */
export async function deleteApp(data) {
  return request('/application/disableApplication', {
    method: 'POST',
    data,
  });
}
/**
 * @name: 获取Secret
 * @param {data}
 */
export async function getSecret(data) {
  return request('/application/getAppSecret', {
    method: 'POST',
    data,
  });
}

/**
 * @name: 修改应用信息
 * @param {data}
 */
export async function modifyApplication(data) {
  return request('/application/modifyApplication', {
    method: 'POST',
    data: {
      ...data,
      industry: 100001,
    },
  });
}
/**
 * @name: 新增应用信息
 * @param {data}
 */
export async function addApplication(data) {
  return request('/application/addApplication', {
    method: 'POST',
    data: {
      ...data,
      industry: 100001,
    },
  });
}
/**
 * @name: 获取应用信息
 * @param {data}
 */
export async function getApplication(data) {
  return request('/application/getApplication', {
    method: 'POST',
    data,
  });
}
/**
 * @name: 接口配置
 * @param {data}
 */
export async function modifyApp(data) {
  return request('/application/modifyApplication', {
    method: 'POST',
    data,
  });
}

/**
 * @name: 申请提交实名认证
 * @param {data}
 */
export async function addIdentifyWorkorder(data) {
  return request('/user/addIdentifyWorkorder', {
    method: 'POST',
    data,
  });
}

/**
 * @name: 获取实名认证状态
 * @param {data}
 */
export async function getMerchantBaseInfo() {
  return request('/user/getMerchantBaseInfo', {
    method: 'POST',
  });
}
/**
 * @name: 获取实名认证状态
 * @param {data}
 */
export async function getLatestIdentifyWorkorder() {
  return request('/user/getLatestIdentifyWorkorder', {
    method: 'POST',
  });
}

/**
 * @name: 发送验证码
 * @param {data}
 */
export async function sendAppSecretValidateCode(data) {
  return request('/application/sendAppSecretValidateCode', {
    method: 'POST',
    data,
  });
}
