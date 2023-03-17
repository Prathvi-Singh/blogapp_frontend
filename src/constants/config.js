
export const API_NOTIFICATION_MESSAGES = {
  
    loading:{
        title:'Loading ...',
        message:'data is loading ,Please wait...😃'
    }
    ,
    success:{
        title:'Success',
        message:'Data successfully loaded'
    },
    responseFailure:{
      title:"Error",
      message:"an errer occured while fectching response from the server , Please try again"
    },
    requestFailure:{
        title:"Error",
        message:"an errer occured while parsing request data, Please try again"
    }, 
    networkError:{
         title:"Error",
         message:"unable to connect with the server ,please internet connectivity"
    }

}

export const SERVICE_URLS={
    userSignup: {url: '/signup',method:'POST'},
    userLogin: {url: '/login',method:'POST'},
    uploadFile: {url: '/file/upload',method:'POST'},
    createPost: {url: '/create',method: 'POST'},
    getAllPosts: {url: '/posts',method:'GET',params:true},
    getPostById: {url: 'post',method:'GET',query:true},
    updateBlog: {url: 'update',method:'PUT',query:true},
    deletePost: {url: 'delete',method:'DELETE', query:true},
    newComment: {url: '/comments/new',method:'POST'} ,
    comm:{url:'allcomments',method:'GET',params:true},
    deleteComm:{url:'deletecomment',method:'DELETE', query:true}

}