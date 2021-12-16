const router = [
  {
    title: '主页',
    key: '/welcome',
  },
  {
    title: '系统配置',
    key: '/system',
    child: [
      {
        key: '/system/user',
        title: '人员管理',
      },
      {
        key: '/system/role',
        title: '岗位管理',
      }
    ]
  },
  {
    title: '业务建模',
    key: '/biz',
    child: [
      {
        key: '/biz/define', 
        title: '业务定义', 
      },
      { 
        key: '/biz/table', 
        title: '工作表单', 
      },
      { 
        key: '/biz/report', 
        title: '打印报表', 
      },
      { 
        key: '/biz/active', 
        title: '工作流程', 
      },
    ]
  },{
    title: '错误详情',
    key: 'error',
    child: [
      {
        key: '/error/404', 
        title: '404', 
      },
      { 
        key: '/error/500', 
        title: '500', 
      }
    ]
  }
]
export default router;