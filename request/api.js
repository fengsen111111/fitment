// 引入 request 文件
import {
	get,
	post
} from './index.js'
const base_url = 'https://api.qfcss.cn'

const api = {
	FILE_TICKET: base_url + '/factory_storage/Ticket/getTicket', // 获取文件存储权限
	FILE_CONFIG: base_url + '/factory_storage/File/getUploadType', // 获取文件存储配置
	FILE_UPLOAD: base_url + '/factory_storage/File/uploadFile', // 上传文件到本地长期保存
	REFRESH_STS: base_url + '/factory_storage/File/refreshSTS', // 刷新云存储的临时令牌
	FRONT_UPLOAD: base_url + '/factory_storage/File/frontUpload', // 前端云存储记录到服务器
	GET_AREAS_BY_LOCATION: base_url + '/factory_system/Base/getAreasByLocation', // 根据坐标获取行政区
	// --------------------------------------------------------
	GET_SETTING: base_url + '/decoration/Setting/getSetting', // 获取基本配置
	GET_RICHTEXT_CONTENT: base_url + '/decoration/Setting/getRichTextContent', // 获取基本配置富文本内容
	GET_HOT_CITY_LIST: base_url + '/decoration/Setting/getHotCityList', // 热门城市（搜索页非热门城市列表使用官方组件）
	GET_MATERISLS: base_url + '/decoration/Setting/getMaterials', // 获取平台资质
	GET_BASE_TYPE: base_url + '/decoration/Setting/getBaseTypes', // 获取简单配置项
	GET_BANNERLIST: base_url + '/decoration/Banner/getBannerList', // 轮播图
	GET_NEW_NOTICE: base_url +
	'/decoration/Notice/getNewNotice', // 最新未读公告 未登录时前端需要缓存公告ID，如果最新未读公告ID已经在缓存中，那么就不展示该公告
	GET_BANNER_CONTENT: base_url + '/decoration/Banner/getBannerContent', // 轮播图富文本详情
	GET_NOTICE_LIST: base_url + '/decoration/Notice/getNoticeList', // 获取公告列表
	GET_NOTICE_DETAILS: base_url + '/decoration/Notice/getNoticeDetail', // 获取公告详情
	GET_ACTIVITY_LIST: base_url + '/decoration/Activity/getActivityList', // 获取每日活动列表
	GET_ACTIVITY_DETAILS: base_url + '/decoration/Activity/getActivityDetail', // 获取每日活动富文本详情
	GET_PROMOTION_AREALIST: base_url + '/decoration/Setting/getPromotionAreaList', // 运营地区
	GET_PROMOTION_TIMELIST: base_url + '/decoration/Setting/getPromotionTimeList', // 投流时长
	SET_UPER_MATERIAL: base_url + '/decoration/User/setUperMaterial', // 设置创作者资料
	GET_UPER_MATERRIAL: base_url + '/decoration/User/getUperMaterial', // 获取创作者资料
	// -----------------------------------------------------------------------
	GET_TOPIC_LIST: base_url + '/decoration/Setting/getTopicList', // 话题
	GET_FRIEND_LIST: base_url + '/decoration/User/getFriendList', //好友(互关)
	EDIT_ARTICLE: base_url + '/decoration/Article/editArticle', //发布
	GET_ARTICLE_LIST: base_url + '/decoration/Article/getArticleList', //获取创作列表
	GET_ARTICLE_DETAIL: base_url + '/decoration/Article/getArticleDetail', //获取创作详情
	STAR_ARTICLE: base_url + '/decoration/Article/starArticle', //点赞/取消点赞
	ALLOW_ARTICLE: base_url + '/decoration/Article/allowUper', //关注/取消关注
	COLLECT_ARTICLE: base_url + '/decoration/Article/collectArticle', //收藏/取消收藏
	EVALUAE_ARTICLE: base_url + '/decoration/ArticleDiscuss/discussArticle', //评论
	GET_EVALUATE_LIST: base_url + '/decoration/ArticleDiscuss/getDiscussList', //获取评论列表
	STAR_EVALUATE: base_url + '/decoration/ArticleDiscuss/starDiscuss', //点赞/取消点赞评论
	SHARE_FRIEND: base_url + '/decoration/Article/shareFriend', //分享给好友
	SHARE_COMPLETE: base_url + '/decoration/Article/shareComplete', //分享完成
	RECOMMEND_ARTICLE: base_url + '/decoration/Article/recommendArticle', //投流
	RECOMMEND_ARTICLE_ORDERE_LIST: base_url + '/decoration/Article/recommendArticleOrderList', //投流列表
	// =========================================================================
	SUBMIT_ENTRY_APPLY: base_url + '/decoration/Store/submitEntryApply', // 提交入驻申请
	GET_STORE_SERVICELIST: base_url + '/decoration/Setting/getStoreServiceList', // 商家服务
	GET_STORE_INFO: base_url + '/decoration/Store/getStoreInfo', // 获取商家信息
	CREATE_CHARGE_ORDER: base_url + '/decoration/Store/createChargeOrder', // 创建押金订单
	// -----------------------------------------------------------------------
	CHANGE_STORE_SERVICES: base_url + '/decoration/Store/changeStoreServices', // 修改商家服务
	// =======================================================================
	GET_DECORATION_STYLES_LIST: base_url + '/decoration/Setting/getDecorationStylesList', // 装修风格
	SUBMIT_SERVICE: base_url + '/decoration/Service/submitService', // 提交预约服务
	GET_MOBILECODE: base_url + '/decoration/User/getMobileCode', // 获取验证码
	CHECK_MOBILE_CODE: base_url + '/decoration/User/checkMobileCode', // 校验验证码
	LOGIN_AND_REGISTER: base_url + '/decoration/User/loginAndRegister', // 登陆与注册&切换账号(前端长期缓存登陆记录：用户id,最新token,手机号)
	DELETE_USER: base_url + '/decoration/User/deleteUser', // 注销账号
	GET_USER_INFO: base_url + '/decoration/User/getUserInfo', // 获取用户信息
	UPDATE_USER_INFO: base_url + '/decoration/User/updateUserInfo', // 修改用户信息&实名认证
	SET_USERPAY_PASSWORD: base_url + '/decoration/User/setUserPayPassword', // 设置提现密码
	CLOSEUSER_PAY_PASSWORD: base_url + '/decoration/User/closeUserPayPassword', // 关闭提现密码
	EDIT_USER_ADDRESS: base_url + '/decoration/UserAddress/editUserAddress', // 添加/修改用户收货信息
	SET_DEFAULT_USER_ADDRESS: base_url + '/decoration/UserAddress/setDefaultUserAddress', // 设置用户收货信息为默认
	DETELE_USER_ADDRESS: base_url + '/decoration/UserAddress/deleteUserAddress', // 删除用户收货信息
	GET_USER_ADDRESSLIST: base_url + '/decoration/UserAddress/getUserAddressList', // 获取用户收货信息列表
	SIGN: base_url + '/decoration/User/sign', // 签到
	GET_SIGNLIST: base_url + '/decoration/User/getSignList', // 获取签到记录
	EDITUSER_INVOICE: base_url + '/decoration/UserInvoice/editUserInvoice', // 添加/修改用户发票信息
	SETDEFAULE_USER_INVOICE: base_url + '/decoration/UserInvoice/setDefaultUserInvoice', // 设置用户发票信息为默认
	DETELE_USER_INVOICE: base_url + '/decoration/UserInvoice/deleteUserInvoice', // 删除用户发票信息
	GETUSER_INVOICELIST: base_url + '/decoration/UserInvoice/getUserInvoiceList', // 获取用户发票信息列表
	SUBMIT_OPTIONION: base_url + '/decoration/Opinion/submitOpinion', // 提交意见反馈
	APPLY_SSHARER: base_url + '/decoration/User/applySharer', // 申请成为推荐官
	CREATE_ENSURE_ORDER: base_url + '/decoration/User/createEnsureOrder', // 创建保证金订单
	GETINEGRAL_RECORDS: base_url + '/decoration/User/getIntegralRecords', // 获取积分记录列表
	SUBMIT_SGARER_WITHDRAWAL: base_url + '/decoration/Withdrawal/submitSharerWithdrawal', // 推荐官提现
	GET_MONEY_RECORDS: base_url + '/decoration/User/getMoneyRecords', // 获取收益记录列表
	
	GET_GOODS_TYPELIST: base_url + '/decoration/GoodsType/getGoodsTypeList', // 获取商品分类列表
	GET_INDEX_GOODS_TYPE_LIST: base_url + '/decoration/GoodsType/getIndexGoodsTypeList', // 获取首页推荐商品分类列表
	GET_GOODS_BRAND_LIST: base_url + '/decoration/Setting/getGoodsBrandList', // 获取商品品牌列表
	GET_GOODS_ACTIVIY_LIST: base_url + '/decoration/GoodsActivity/getGoodsActivityList', // 获取包邮专区列表
	GET_GOODS_LIST: base_url + '/decoration/Goods/getGoodsList', // 获取商品列表
	COOLECION_GOODS: base_url + '/decoration/User/collectionGoods', // 收藏/取消收藏商品
	USER_GET_STORE_INFO: base_url + '/decoration/Store/userGetStoreInfo', // 用户获取商家信息
	ATTENTION_STORE: base_url + '/decoration/User/attentionStore', // 关注/取消关注商家
	USER_GETSTORE_EVALUETE: base_url + '/decoration/Store/userGetStoreEvaluate', // 用户获取商家评价
	GET_GOODS_DETAILS: base_url + '/decoration/Goods/getGoodsDetail', // 获取商品详情
	ADD_CAR: base_url + '/decoration/Car/addCar', // 加入购物车
	GET_CARLIST: base_url + '/decoration/Car/getCarList', // 获取用户购物车列表
	EDITCAR_GOODS: base_url + '/decoration/Car/editCarGoods', // 修改购物车商品数量
	DELETECAR_GOODS: base_url + '/decoration/Car/deleteCarGoods', // 删除购物车商品
	// --------------------------------------------------------------------------------
	COMPUT_ORDER: base_url + '/decoration/Order/computeOrder', // 计算订单价格
	CREATE_ORDER: base_url + '/decoration/Order/createOrder', // 下单
	PAY_ORDER: base_url + '/decoration/Order/payOrder', // 支付订单
	GET_ORDER_LIST: base_url + '/decoration/Order/getOrderList', // 获取订单列表
	GET_ORDER_DETAIL: base_url + '/decoration/Order/getOrderDetail', // 获取订单详情
	URGE_ORDER: base_url + '/decoration/Order/urgeOrder', // 催发货
	OVER_ORDER: base_url + '/decoration/Order/overOrder', // 收货
	EVALUATE_ORDER: base_url + '/decoration/Order/evaluateOrder', // 评价订单
	AFERSALE_REASON_LIST: base_url + '/decoration/Setting/aftersaleReasonList', // 售后原因
	AFERSALE_ORDER: base_url + '/decoration/Order/aftersaleOrder', // 发起售后
	END_AFERSALE_ORDER: base_url + '/decoration/Order/endAftersaleOrder', // 取消售后
	TRANSPORT_LIST: base_url + '/decoration/Setting/transportList', // 物流公司
	SEND_ORDER: base_url + '/decoration/Order/sendOrder', // 发货
	AGREE_AFTERSALE_ORDER: base_url + '/decoration/Order/agreeAftersaleOrder', // 同意售后
	// ================================================================================
	GET_INEGRAL_GOODS_TYPELIST: base_url + '/decoration/IntegralGoodsType/getIntegralGoodsTypeList', // 获取积分商品分类列表
	GET_INTEGRAL_GOODS_BRANDLIST: base_url + '/decoration/Setting/getIntegralGoodsBrandList', // 获取积分商品品牌列表
	GET_INTEGRALGOODS_LIST: base_url + '/decoration/IntegralGoods/getIntegralGoodsList', // 获取积分商品列表
	GET_INTERGRAL_GOODS_DETAIL: base_url + '/decoration/IntegralGoods/getIntegralGoodsDetail', // 获取积分商品详情
	COMPUTER_INTEDRAL_GOODS_ORDER: base_url +'/decoration/IntegralGoodsOrder/computeIntegralGoodsOrder', // 计算积分商品价格
	CREATE_INTEGRAL_GOODS_ORDER: base_url + '/decoration/IntegralGoodsOrder/createIntegralGoodsOrder', // 下单积分商品
	PAY_INTEGRAL_GOODS_ORDER: base_url + '/decoration/IntegralGoodsOrder/payIntegralGoodsOrder', // 支付积分商品订单
	GET_INTEGRAL_GOODS_ORDER_LIST: base_url +'/decoration/IntegralGoodsOrder/getIntegralGoodsOrderList', // 获取积分商品订单列表
	OVER_INTEGRAL_GOODS_ORDER: base_url + '/decoration/IntegralGoodsOrder/overIntegralGoodsOrder', // 积分商品订单收货
}

// 获取文件存储权限
export const getTicket = (params) => {
	return post(api.FILE_TICKET, params)
}
// 获取文件存储配置
export const getUploadType = (params) => {
	return post(api.FILE_CONFIG, params)
}
// 上传文件到本地长期保存
export const uploadFile = (params) => {
	return post(api.FILE_UPLOAD, params)
}
// 刷新云存储的临时令牌
export const refreshSTS = (params) => {
	return post(api.REFRESH_STS, params)
}
// 前端云存储记录到服务器
export const frontUpload = (params) => {
	return post(api.FRONT_UPLOAD, params)
}
// 根据坐标获取行政区
export const getAreasByLocation = (params) => {
	return post(api.GET_AREAS_BY_LOCATION, params)
}
// ------------------------------------------------------------------
// 获取基本配置
export const getSetting = (params) => {
	return post(api.GET_SETTING, params)
}
// 获取基本配置富文本内容
export const getRichTextContent = (params) => {
	return post(api.GET_RICHTEXT_CONTENT, params)
}
// 热门城市（搜索页非热门城市列表使用官方组件）
export const getHotCityList = (params) => {
	return post(api.GET_HOT_CITY_LIST, params)
}
// 获取平台资质
export const getMaterials = (params) => {
	return post(api.GET_MATERISLS, params)
}
// 获取简单配置项
export const getBaseTypes = (params) => {
	return post(api.GET_BASE_TYPE, params)
}
// 轮播图
export const getBannerList = (params) => {
	return post(api.GET_BANNERLIST, params)
}
// 最新未读公告 未登录时前端需要缓存公告ID，如果最新未读公告ID已经在缓存中，那么就不展示该公告
export const getNewNotice = (params) => {
	return post(api.GET_NEW_NOTICE, params)
}
// 获取公告列表
export const getNoticeList = (params) => {
	return post(api.GET_NOTICE_LIST, params)
}
// 获取公告详情
export const getNoticeDetail = (params) => {
	return post(api.GET_NOTICE_DETAILS, params)
}
// 获取每日活动列表
export const getActivityList = (params) => {
	return post(api.GET_ACTIVITY_LIST, params)
}
// 获取每日活动富文本详情
export const getActivityDetail = (params) => {
	return post(api.GET_ACTIVITY_DETAILS, params)
}
// 轮播图富文本详情
export const getBannerContent = (params) => {
	return post(api.GET_BANNER_CONTENT, params)
}
// 运营地区
export const getPromotionAreaList = (params) => {
	return post(api.GET_PROMOTION_AREALIST, params)
}
// 投流时长
export const getPromotionTimeList = (params) => {
	return post(api.GET_PROMOTION_TIMELIST, params)
}
// 设置创作者资料
export const setUperMaterial = (params) => {
	return post(api.SET_UPER_MATERIAL, params)
}
// 获取创作者资料
export const getUperMaterial = (params) => {
	return post(api.GET_UPER_MATERRIAL, params)
}
// 话题
export const getTopicList = (params) => {
	return post(api.GET_TOPIC_LIST, params)
}
// 好友(互关)
export const getFriendList = (params) => {
	return post(api.GET_FRIEND_LIST, params)
}
// 发布
export const editArticle = (params) => {
	return post(api.EDIT_ARTICLE, params)
}
// 获取创作列表
export const getArticleList = (params) => {
	return post(api.GET_ARTICLE_LIST, params)
}
// 获取创作详情
export const getArticleDetail = (params) => {
	return post(api.GET_ARTICLE_DETAIL, params)
}
// 点赞/取消点赞
export const starArticle = (params) => {
	return post(api.STAR_ARTICLE, params)
}
// 关注/取消关注
export const allowUper = (params) => {
	return post(api.ALLOW_ARTICLE, params)
}
// 收藏/取消收藏
export const collectArticle = (params) => {
	return post(api.COLLECT_ARTICLE, params)
}
// 评论
export const discussArticle = (params) => {
	return post(api.EVALUAE_ARTICLE, params)
}
// 获取评论列表
export const getDiscussList = (params) => {
	return post(api.GET_EVALUATE_LIST, params)
}
// 点赞/取消点赞评论
export const starDiscuss = (params) => {
	return post(api.STAR_EVALUATE, params)
}
// 分享给好友
export const shareFriend = (params) => {
	return post(api.SHARE_FRIEND, params)
}
//分享完成
export const shareComplete = (params) => {
	return post(api.SHARE_COMPLETE, params)
}
// 投流
export const recommendArticle = (params) => {
	return post(api.RECOMMEND_ARTICLE, params)
}
// 投流列表
export const recommendArticleOrderList = (params) => {
	return post(api.RECOMMEND_ARTICLE_ORDERE_LIST, params)
}
// -------------------------------------
// 提交入驻申请
export const submitEntryApply = (params) => {
	return post(api.SUBMIT_ENTRY_APPLY, params)
}
// 商家服务
export const getStoreServiceList = (params) => {
	return post(api.GET_STORE_SERVICELIST, params)
}
// 获取商家信息
export const getStoreInfo = (params) => {
	return post(api.GET_STORE_INFO, params)
}
// 创建押金订单
export const createChargeOrder = (params) => {
	return post(api.CREATE_CHARGE_ORDER, params)
}
// 修改商家服务
export const changeStoreServices = (params) => {
	return post(api.CHANGE_STORE_SERVICES, params)
}
// 装修风格
export const getDecorationStylesList = (params) => {
	return post(api.GET_DECORATION_STYLES_LIST, params)
}
// 提交预约服务
export const submitService = (params) => {
	return post(api.SUBMIT_SERVICE, params)
}
// 获取验证码
export const getMobileCode = (params) => {
	return post(api.GET_MOBILECODE, params)
}
// 校验验证码
export const checkMobileCode = (params) => {
	return post(api.CHECK_MOBILE_CODE, params)
}

// 登陆与注册&切换账号(前端长期缓存登陆记录：用户id,最新token,手机号)
export const loginAndRegister = (params) => {
	return post(api.LOGIN_AND_REGISTER, params)
}
// 注销账号
export const deleteUser = (params) => {
	return post(api.DELETE_USER, params)
}
// 获取用户信息
export const getUserInfo = (params) => {
	return post(api.GET_USER_INFO, params)
}
//  修改用户信息&实名认证
export const updateUserInfo = (params) => {
	return post(api.UPDATE_USER_INFO, params)
}
// 设置提现密码
export const setUserPayPassword = (params) => {
	return post(api.SET_USERPAY_PASSWORD, params)
}
// 关闭提现密码
export const closeUserPayPassword = (params) => {
	return post(api.CLOSEUSER_PAY_PASSWORD, params)
}
// 添加/修改用户收货信息
export const editUserAddress = (params) => {
	return post(api.EDIT_USER_ADDRESS, params)
}
// 设置用户收货信息为默认
export const setDefaultUserAddress = (params) => {
	return post(api.SET_DEFAULT_USER_ADDRESS, params)
}
// 删除用户收货信息
export const deleteUserAddress = (params) => {
	return post(api.DETELE_USER_ADDRESS, params)
}
// 获取用户收货信息列表
export const getUserAddressList = (params) => {
	return post(api.GET_USER_ADDRESSLIST, params)
}
// 签到
export const sign = (params) => {
	return post(api.SIGN, params)
}
// 获取签到记录
export const getSignList = (params) => {
	return post(api.GET_SIGNLIST, params)
}
// 添加/修改用户发票信息
export const editUserInvoice = (params) => {
	return post(api.EDITUSER_INVOICE, params)
}
// 设置用户发票信息为默认
export const setDefaultUserInvoice = (params) => {
	return post(api.SETDEFAULE_USER_INVOICE, params)
}
// 删除用户发票信息
export const deleteUserInvoice = (params) => {
	return post(api.DETELE_USER_INVOICE, params)
}
// 获取用户发票信息列表
export const getUserInvoiceList = (params) => {
	return post(api.GETUSER_INVOICELIST, params)
}
// 提交意见反馈
export const submitOpinion = (params) => {
	return post(api.SUBMIT_OPTIONION, params)
}
// 申请成为推荐官
export const applySharer = (params) => {
	return post(api.APPLY_SSHARER, params)
}
// 创建保证金订单
export const createEnsureOrder = (params) => {
	return post(api.CREATE_ENSURE_ORDER, params)
}
// 获取积分记录列表
export const getIntegralRecords = (params) => {
	return post(api.GETINEGRAL_RECORDS, params)
}
// 推荐官提现
export const submitSharerWithdrawal = (params) => {
	return post(api.SUBMIT_SGARER_WITHDRAWAL, params)
}
// 获取收益记录列表
export const getMoneyRecords = (params) => {
	return post(api.GET_MONEY_RECORDS, params)
}
// 获取商品分类列表
export const getGoodsTypeList = (params) => {
	return post(api.GET_GOODS_TYPELIST, params)
}
// 获取首页推荐商品分类列表
export const getIndexGoodsTypeList = (params) => {
	return post(api.GET_INDEX_GOODS_TYPE_LIST, params)
}
// 获取商品品牌列表
export const getGoodsBrandList = (params) => {
	return post(api.GET_GOODS_BRAND_LIST, params)
}
// 获取包邮专区列表
export const getGoodsActivityList = (params) => {
	return post(api.GET_GOODS_ACTIVIY_LIST, params)
}
// 获取商品列表
export const getGoodsList = (params) => {
	return post(api.GET_GOODS_LIST, params)
}
// 收藏/取消收藏商品
export const collectionGoods = (params) => {
	return post(api.COOLECION_GOODS, params)
}
// 用户获取商家信息
export const userGetStoreInfo = (params) => {
	return post(api.USER_GET_STORE_INFO, params)
}
// 关注/取消关注商家
export const attentionStore = (params) => {
	return post(api.ATTENTION_STORE, params)
}
// 用户获取商家评价
export const userGetStoreEvaluate = (params) => {
	return post(api.USER_GETSTORE_EVALUETE, params)
}
// 获取商品详情
export const getGoodsDetail = (params) => {
	return post(api.GET_GOODS_DETAILS, params)
}
// 加入购物车
export const addCar = (params) => {
	return post(api.ADD_CAR, params)
}
// 获取用户购物车列表
export const getCarList = (params) => {
	return post(api.GET_CARLIST, params)
}
// 修改购物车商品数量
export const editCarGoods = (params) => {
	return post(api.EDITCAR_GOODS, params)
}
// 删除购物车商品
export const deleteCarGoods = (params) => {
	return post(api.DELETECAR_GOODS, params)
}
// 计算订单价格
export const computeOrder = (params) => {
	return post(api.COMPUT_ORDER, params)
}
// 下单
export const createOrder = (params) => {
	return post(api.CREATE_ORDER, params)
}
// 支付订单
export const payOrder = (params) => {
	return post(api.PAY_ORDER, params)
}
// 获取订单列表
export const getOrderList = (params) => {
	return post(api.GET_ORDER_LIST, params)
}
// 获取订单详情
export const getOrderDetail = (params) => {
	return post(api.GET_ORDER_DETAIL, params)
}
// 催发货
export const urgeOrder = (params) => {
	return post(api.URGE_ORDER, params)
}
// 收货
export const overOrder = (params) => {
	return post(api.OVER_ORDER, params)
}
// 评价订单
export const evaluateOrder = (params) => {
	return post(api.EVALUATE_ORDER, params)
}
// 售后原因
export const aftersaleReasonList = (params) => {
	return post(api.AFERSALE_REASON_LIST, params)
}
// 发起售后
export const aftersaleOrder = (params) => {
	return post(api.AFERSALE_ORDER, params)
}
// 取消售后
export const endAftersaleOrder = (params) => {
	return post(api.END_AFERSALE_ORDER, params)
}
// 物流公司
export const transportList = (params) => {
	return post(api.TRANSPORT_LIST, params)
}
// 发货
export const sendOrder = (params) => {
	return post(api.SEND_ORDER, params)
}
// 同意售后
export const agreeAftersaleOrder = (params) => {
	return post(api.AGREE_AFTERSALE_ORDER, params)
}
// =========================================
// 获取积分商品分类列表
export const getIntegralGoodsTypeList = (params) => {
	return post(api.GET_INEGRAL_GOODS_TYPELIST, params)
}
// 获取积分商品品牌列表
export const getIntegralGoodsBrandList = (params) => {
	return post(api.GET_INTEGRAL_GOODS_BRANDLIST, params)
}
// 获取积分商品列表
export const getIntegralGoodsList = (params) => {
	return post(api.GET_INTEGRALGOODS_LIST, params)
}
// 获取积分商品详情
export const getIntegralGoodsDetail = (params) => {
	return post(api.GET_INTERGRAL_GOODS_DETAIL, params)
}
// 计算积分商品价格
export const computeIntegralGoodsOrder = (params) => {
	return post(api.COMPUTER_INTEDRAL_GOODS_ORDER, params)
}
// 下单积分商品
export const createIntegralGoodsOrder = (params) => {
	return post(api.CREATE_INTEGRAL_GOODS_ORDER, params)
}
// 支付积分商品订单
export const payIntegralGoodsOrder = (params) => {
	return post(api.PAY_INTEGRAL_GOODS_ORDER, params)
}
// 获取积分商品订单列表
export const getIntegralGoodsOrderList = (params) => {
	return post(api.GET_INTEGRAL_GOODS_ORDER_LIST, params)
}
// 积分商品订单收货
export const overIntegralGoodsOrder = (params) => {
	return post(api.OVER_INTEGRAL_GOODS_ORDER, params)
}