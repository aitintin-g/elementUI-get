export default{
    path:'/introduct',
    component:()=>import('@/views/Introduct'),
    children:[
        {
            path:'introduct1',
            component:()=>import('@/components/Introduct1')
        },
        {
            path:'introduct2',
            component:()=>import('@/components/Introduct2')
        },
        {
            path:'/introduct',
            redirect:'introduct1'
        }
    ]
}