const userMixin={
  methods:{
    getUserInformation(userId){
     // return fetch(`/api/user/${userId}`)
      //.then((res)=>res.json());
      return {userId:1,name:'admin'}
    }
 }
}
