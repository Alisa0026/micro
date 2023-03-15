import { initGlobalState } from 'qiankun'

const initialState = {
    userInfo: [
        {
            userName: '张三',
            userId: '1'
        },
        {
            userName: '李四',
            userId: '2'
        }
    ]
}

const actions = initGlobalState(initialState)

// 监听公共状态的变化
actions.onGlobalStateChange((state, prev) => {
    console.log('主应用：变更前');
    console.log(prev);
    console.log('主应用：变更后');
    console.log(state);
})

export default actions