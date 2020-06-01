(this["webpackJsonpilchyshyn-bohdan.github.io"]=this["webpackJsonpilchyshyn-bohdan.github.io"]||[]).push([[0],{161:function(e,a,t){},165:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),r=t(51),l=t.n(r),o=(t(59),t(2)),c=t(3),m=t(9),i=t(8),u=(t(60),t(7)),d=t.n(u),h="https://plservice.herokuapp.com/auth/",g=new(function(){function e(){Object(o.a)(this,e)}return Object(c.a)(e,[{key:"login",value:function(e,a){var t=this;return d.a.post(h+"login/",{username:e,password:a}).then((function(a){return t.setUserName(e),t.setUserToken(a.data.key),a.data}))}},{key:"logout",value:function(){localStorage.removeItem("user_token"),localStorage.removeItem("username")}},{key:"registration",value:function(e,a,t,n){return d.a.post(h+"registration/",{username:e,email:a,password1:t,password2:n})}},{key:"setUserToken",value:function(e){localStorage.setItem("user_token",e)}},{key:"setUserName",value:function(e){localStorage.setItem("username",e)}},{key:"getUserToken",value:function(){return localStorage.getItem("user_token")}},{key:"getUserName",value:function(){return localStorage.getItem("username")}},{key:"getUser",value:function(){var e=this.getUserToken();return e="Token "+e,d.a.get(h+"user/",{headers:{Authorization:e}})}},{key:"putUser",value:function(e,a,t,n){var s=this.getUserToken();return s="Token "+s,d()({method:"PUT",url:h+"user/",headers:{Authorization:s},data:{username:e,email:n,first_name:a,last_name:t}})}},{key:"changePassword",value:function(e,a){var t=this.getUserToken();return t="Token "+t,d()({method:"POST",url:h+"password/change/",headers:{Authorization:t},data:{new_password1:e,new_password2:a}})}}]),e}()),v=t(16),b=t(4),p="https://plservice.herokuapp.com/api/",f=new(function(){function e(){Object(o.a)(this,e)}return Object(c.a)(e,[{key:"getAlbum",value:function(e){return d.a.get(p+"albums/"+e+"/")}},{key:"getAlbums",value:function(e){return 0===e?d.a.get(p+"albums"):d.a.get(p+"albums/?count="+e)}},{key:"getBand",value:function(e){return d.a.get(p+"bands/"+e+"/")}},{key:"getBands",value:function(e){return 0===e?d.a.get(p+"bands/"):d.a.get(p+"bands/?count="+e)}},{key:"getArtist",value:function(e){return d.a.get(p+"artists/"+e+"/")}},{key:"getArtists",value:function(){return d.a.get(p+"artists/")}}]),e}());t(78);function E(e,a,t){return n.createElement("div",{className:"responsive"},n.createElement("div",{className:"gallery"},n.createElement("a",{href:t},n.createElement("img",{src:e,alt:"s1",width:"600",height:"400"})),n.createElement("div",{className:"desc"},a)))}var N=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).state={albums:[],bands:[],artists:[]},n}return Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;f.getAlbums(5).then((function(a){var t=a.data;e.setState({albums:t})}),(function(a){e.setState({albums:a.response&&a.response.data&&a.response.data.message||a.message||a.toString()})})),f.getBands(5).then((function(a){var t=a.data;e.setState({bands:t})}),(function(a){e.setState({bands:a.response&&a.response.data&&a.response.data.message||a.message||a.toString()})})),f.getArtists().then((function(a){var t=a.data;e.setState({artists:t})}),(function(a){e.setState({artists:a.response&&a.response.data&&a.response.data.message||a.message||a.toString()})}))}},{key:"render",value:function(){return n.createElement("div",null,n.createElement("div",{className:"row row-content",style:{marginTop:"50px"}},n.createElement("div",{className:"col-12"},n.createElement("div",{className:"col text-center"},n.createElement("h1",null,"Popular albums")),this.state.albums.map((function(e,a){return n.createElement("div",null,E(e.cover,e.name,"/album/"+e.id+"/"))})))),n.createElement("div",{className:"row row-content"},n.createElement("div",{className:"col-12"},n.createElement("div",{className:"col text-center"},n.createElement("h1",null,"Popular bands")),this.state.bands.map((function(e,a){return n.createElement("div",null,E(e.cover,e.name,"pr/1/"+e.id+"/"))})))),n.createElement("div",{className:"row row-content"},n.createElement("div",{className:"col-12"},n.createElement("div",{className:"col text-center"},n.createElement("h1",null,"Popular artist")),this.state.artists.map((function(e,a){return n.createElement("div",null,E(e.photo,e.nick_name,"pr/2/"+e.id+"/"))})))))}}]),t}(n.Component),y=t(5),k=(t(79),t(18)),w=t.n(k),C=t(10),S=t.n(C),O=t(19),j=t.n(O),x=function(e){if(!e)return s.a.createElement("div",{className:"alert alert-danger",role:"alert"},"This field is required!")},U=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).handleLogin=n.handleLogin.bind(Object(y.a)(n)),n.onChangeUsername=n.onChangeUsername.bind(Object(y.a)(n)),n.onChangePassword=n.onChangePassword.bind(Object(y.a)(n)),n.state={username:"",password:"",loading:!1,message:""},n}return Object(c.a)(t,[{key:"onChangeUsername",value:function(e){this.setState({username:e.target.value})}},{key:"onChangePassword",value:function(e){this.setState({password:e.target.value})}},{key:"handleLogin",value:function(e){var a=this;e.preventDefault(),this.setState({message:"",loading:!0}),this.form.validateAll(),0===this.checkBtn.context._errors.length?g.login(this.state.username,this.state.password).then((function(){a.props.history.push("/"),window.location.reload()}),(function(e){var t=e.response&&e.response.data&&e.response.data.message||e.message||e.toString();a.setState({loading:!1,message:t})})):this.setState({loading:!1})}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"col-sm-12 col-md-9 col-lg-6 mx-auto"},s.a.createElement("div",{className:"card card-container",style:{backgroundColor:"#1F222E",top:"250px",border:0,color:"#e2e2e2"}},s.a.createElement("div",{className:"card-body",style:{padding:"2rem"}},s.a.createElement("h5",{className:"text-center",style:{color:"#afb1be",marginBottom:"2rem",fontWeight:"bold",fontSize:"1.5rem"}},"LogIn"),s.a.createElement(w.a,{onSubmit:this.handleLogin,ref:function(a){e.form=a}},s.a.createElement("div",{className:"form-signin",style:{width:"100%"}},s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"username"},"Username"),s.a.createElement(S.a,{type:"text",className:"form-control",name:"username",value:this.state.username,onChange:this.onChangeUsername,style:{backgroundColor:"#afb1be",borderColor:"#1F222E"},validations:[x]})),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"password"},"Password"),s.a.createElement(S.a,{type:"password",className:"form-control",name:"password",value:this.state.password,onChange:this.onChangePassword,style:{backgroundColor:"#afb1be",borderColor:"#1F222E"},validations:[x]})),s.a.createElement("div",{className:"form-group"},s.a.createElement("button",{className:"btn btn-primary btn-block",disabled:this.state.loading},this.state.loading&&s.a.createElement("span",{className:"spinner-border spinner-border-sm"}),s.a.createElement("span",null,"Login"))),this.state.message&&s.a.createElement("div",{className:"form-group"},s.a.createElement("div",{className:"alert alert-danger",role:"alert"},this.state.message)),s.a.createElement(j.a,{style:{display:"none"},ref:function(a){e.checkBtn=a}}),s.a.createElement("hr",{className:"my-4"}))))))}}]),t}(s.a.Component),P=(t(86),function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).state={album:""},n}return Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params;f.getAlbum(a.albumId).then((function(a){var t=a.data;e.setState({album:t})}))}},{key:"render",value:function(){var e=this;return n.createElement("div",{className:"alb"},n.createElement("div",{class:"row row-content",style:{marginTop:"50px"}},n.createElement("div",{className:"col-12"},n.createElement("div",{class:"card mb-3 album",style:{backgroundColor:"#1F222E",color:"#e2e2e2"}},n.createElement("div",{class:"row no-gutters"},n.createElement("div",{class:"col-md-4"},n.createElement("img",{src:this.state.album.cover,className:"card-img",alt:"..."})),n.createElement("div",{class:"col-md-8"},n.createElement("div",{class:"card-body"},n.createElement("h1",{class:"card-title"},this.state.album.name),n.createElement("p",{class:"card-text"},this.state.album.description),n.createElement("a",{href:"#",class:"btn btn-primary btn-album"},"Add to library"))))))),n.createElement("div",{class:"row row-content"},n.createElement("div",{class:"col-12"},n.createElement("div",{class:"list-group"},[1,2,3,4,5,6,7,8,9].map((function(a){return n.createElement("a",{href:"#",className:"list-group-item list-group-item-action music-list",style:{backgroundColor:"#1F222E",color:"#e2e2e2"}},n.createElement("div",{className:"row"},n.createElement("div",{className:"col-1"},n.createElement("img",{src:e.state.album.cover,alt:"p",height:"40",width:"40"})),n.createElement("div",{className:"col-9 ml-2"},n.createElement("h3",null,"Music ",a))))}))))))}}]),t}(n.Component)),T=new(function(){function e(){Object(o.a)(this,e)}return Object(c.a)(e,[{key:"getAllUsers",value:function(){return d.a.get("https://plservice.herokuapp.com/users/")}},{key:"getUser",value:function(e){return d.a.get("https://plservice.herokuapp.com/users/"+e)}}]),e}()),F=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).state={content:[]},n}return Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;T.getAllUsers().then((function(a){var t=a.data;e.setState({content:t})}),(function(a){e.setState({content:a.response&&a.response.data&&a.response.data.message||a.message||a.toString()})}))}},{key:"render",value:function(){return s.a.createElement("div",{className:"row align-content-center"},s.a.createElement("div",{className:"col-12",style:{top:"50px"}},s.a.createElement("h1",{className:"text-center"},"Users List"),s.a.createElement("ul",{className:"list-group"},this.state.content.map((function(e,a){return s.a.createElement("li",{key:a},"username: ",e.username,s.a.createElement("br",null),"email: ",e.email,s.a.createElement("br",null),"first name: ",e.first_name,s.a.createElement("br",null),"last name: ",e.last_name)})))))}}]),t}(s.a.Component),A=t(52),_=(t(87),function(e){if(!e)return s.a.createElement("div",{className:"alert alert-danger",role:"alert"},"This field is required!")}),B=function(e){if(!Object(A.isEmail)(e))return s.a.createElement("div",{className:"alert alert-danger",role:"alert"},"This is not a valid email.")},I=function(e){if(e.length<3||e.length>20)return s.a.createElement("div",{className:"alert alert-danger",role:"alert"},"The username must be between 3 and 20 characters.")},L=function(e){if(e.length<6||e.length>40)return s.a.createElement("div",{className:"alert alert-danger",role:"alert"},"The password must be between 6 and 40 characters.")},D=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).handleRegister=n.handleRegister.bind(Object(y.a)(n)),n.onChangeUsername=n.onChangeUsername.bind(Object(y.a)(n)),n.onChangeEmail=n.onChangeEmail.bind(Object(y.a)(n)),n.onChangePassword1=n.onChangePassword1.bind(Object(y.a)(n)),n.onChangePassword2=n.onChangePassword2.bind(Object(y.a)(n)),n.state={username:"",email:"",password1:"",password2:"",successful:!1,message:""},n}return Object(c.a)(t,[{key:"onChangeUsername",value:function(e){this.setState({username:e.target.value})}},{key:"onChangeEmail",value:function(e){this.setState({email:e.target.value})}},{key:"onChangePassword1",value:function(e){this.setState({password1:e.target.value})}},{key:"onChangePassword2",value:function(e){this.setState({password2:e.target.value})}},{key:"handleRegister",value:function(e){var a=this;e.preventDefault(),this.setState({message:"",successful:!1}),this.form.validateAll(),0===this.checkBtn.context._errors.length&&g.registration(this.state.username,this.state.email,this.state.password1,this.state.password2).then((function(e){a.setState({message:e.statusText,successful:!0})}),(function(e){var t=e.response&&e.response.data&&e.response.data.message||e.message||e.toString();a.setState({successful:!1,message:t})}))}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"col-sm-12 col-md-9 col-lg-6 mx-auto"},s.a.createElement("div",{className:"card",style:{backgroundColor:"#1F222E",top:"250px",border:0,color:"#e2e2e2"}},s.a.createElement("div",{className:"card-body",style:{padding:"2rem"}},s.a.createElement("h5",{className:"text-center",style:{color:"#afb1be",marginBottom:"2rem",fontWeight:"bold",fontSize:"1.5rem"}},"SingUp"),s.a.createElement(w.a,{onSubmit:this.handleRegister,ref:function(a){e.form=a}},!this.state.successful&&s.a.createElement("div",{className:"form-signin"},s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"username"},"Username"),s.a.createElement(S.a,{type:"text",className:"form-control",name:"username",value:this.state.username,onChange:this.onChangeUsername,style:{backgroundColor:"#afb1be",borderColor:"#1F222E"},validations:[_,I]})),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"email"},"Email"),s.a.createElement(S.a,{type:"text",className:"form-control",name:"email",value:this.state.email,onChange:this.onChangeEmail,style:{backgroundColor:"#afb1be",borderColor:"#1F222E"},validations:[_,B]})),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"password1"},"Password1"),s.a.createElement(S.a,{type:"password1",className:"form-control",name:"password1",value:this.state.password1,onChange:this.onChangePassword1,style:{backgroundColor:"#afb1be",borderColor:"#1F222E"},validations:[_,L]})),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"password2"},"Password2"),s.a.createElement(S.a,{type:"password2",className:"form-control",name:"password2",value:this.state.password2,onChange:this.onChangePassword2,style:{backgroundColor:"#afb1be",borderColor:"#1F222E"},validations:[_,L]})),s.a.createElement("div",{className:"form-group"},s.a.createElement("button",{className:"btn btn-primary btn-block"},"Sign Up"))),this.state.message&&(alert(this.state.message),s.a.createElement("div",{className:"form-group"},s.a.createElement("h7",{className:"text-center",style:{color:"#afb1be",marginBottom:"2rem",fontWeight:"bold",fontSize:"1.5rem"}},"Account created. Please login to use service."))),s.a.createElement(j.a,{style:{display:"none"},ref:function(a){e.checkBtn=a}})))))}}]),t}(s.a.Component),M=(t(161),function(e){if(!e)return s.a.createElement("div",{className:"alert alert-danger",role:"alert"},"This field is required!")}),z=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).onChangeUsername=n.onChangeUsername.bind(Object(y.a)(n)),n.onChangeFirstname=n.onChangeFirstname.bind(Object(y.a)(n)),n.onChangeLastname=n.onChangeLastname.bind(Object(y.a)(n)),n.onChangePass1=n.onChangePass1.bind(Object(y.a)(n)),n.onChangePass2=n.onChangePass2.bind(Object(y.a)(n)),n.handleSave=n.handleSave.bind(Object(y.a)(n)),n.handleChangePass=n.handleChangePass.bind(Object(y.a)(n)),n.state={username:"",firstname:"",lastname:"",email:"",password1:"",password2:""},n}return Object(c.a)(t,[{key:"onChangeUsername",value:function(e){this.setState({username:e.target.value})}},{key:"onChangeFirstname",value:function(e){this.setState({firstname:e.target.value})}},{key:"onChangeLastname",value:function(e){this.setState({lastname:e.target.value})}},{key:"onChangePass1",value:function(e){this.setState({password1:e.target.value})}},{key:"onChangePass2",value:function(e){this.setState({password2:e.target.value})}},{key:"handleSave",value:function(e){var a=this;e.preventDefault(),g.putUser(this.state.username,this.state.firstname,this.state.lastname,this.state.email).then((function(e){g.setUserName(a.state.username),window.location.reload()}))}},{key:"handleChangePass",value:function(e){g.changePassword(this.state.password1,this.state.password2)}},{key:"componentDidMount",value:function(){var e=this;g.getUser().then((function(a){var t=a.data;e.setState({username:t.username,firstname:t.first_name,lastname:t.last_name,email:t.email})}),(function(e){alert(JSON.stringify(e.response))}))}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"row justify-content-center"},s.a.createElement("div",{className:"col-sm-12 col-md-9 col-lg-8",style:{top:"100px"}},s.a.createElement("div",{className:"panel panel-default"},s.a.createElement("div",{className:"panel-body text-center"},s.a.createElement("img",{src:"https://bootdey.com/img/Content/avatar/avatar6.png",className:"img-circle profile-avatar",alt:"User avatar"}))),s.a.createElement(w.a,{onSubmit:this.handleSave,ref:function(a){e.form=a}},s.a.createElement("div",{className:"panel panel-default"},s.a.createElement("div",{className:"panel-heading"},s.a.createElement("h2",{className:"panel-title"},"User info")),s.a.createElement("div",{className:"panel-body"},s.a.createElement("div",{className:"form-group"},s.a.createElement("label",null,"Nickname"),s.a.createElement(S.a,{type:"text",className:"form-control",name:"username",value:this.state.username,onChange:this.onChangeUsername,style:{backgroundColor:"#afb1be",borderColor:"#1F222E",color:"#1f222e"},validations:[M]})),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",null,"First name"),s.a.createElement(S.a,{type:"text",className:"form-control",name:"username",value:this.state.firstname,onChange:this.onChangeFirstname,style:{backgroundColor:"#afb1be",borderColor:"#1F222E",color:"#1f222e"}})),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",null,"Last name"),s.a.createElement(S.a,{type:"text",className:"form-control",name:"username",value:this.state.lastname,onChange:this.onChangeLastname,style:{backgroundColor:"#afb1be",borderColor:"#1F222E",color:"#1f222e"}})),s.a.createElement("div",{className:"form-group custom-btn"},s.a.createElement("button",{className:"btn btn-primary btn-block",disabled:this.state.loading},this.state.loading&&s.a.createElement("span",{className:"spinner-border spinner-border-sm"}),s.a.createElement("span",null,"Save"))),s.a.createElement(j.a,{style:{display:"none"},ref:function(a){e.checkBtn=a}})))),s.a.createElement(w.a,{onSubmit:this.handleChangePass,ref:function(a){e.form=a}},s.a.createElement("div",{className:"panel panel-default"},s.a.createElement("div",{className:"panel-heading"},s.a.createElement("h2",{className:"panel-title"},"Security")),s.a.createElement("div",{className:"panel-body"},s.a.createElement("div",{className:"form-group"},s.a.createElement("label",null,"New password"),s.a.createElement(S.a,{type:"password",className:"form-control",name:"password1",onChange:this.onChangePass1,style:{backgroundColor:"#afb1be",borderColor:"#1F222E",color:"#1f222e"},validations:[M]})),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",null,"Repeat password"),s.a.createElement(S.a,{type:"password",className:"form-control",name:"newpassword",onChange:this.onChangePass2,style:{backgroundColor:"#afb1be",borderColor:"#1F222E",color:"#1f222e"},validations:[M]})),s.a.createElement("div",{className:"form-group custom-btn"},s.a.createElement("button",{className:"btn btn-primary btn-block"},this.state.loading&&s.a.createElement("span",{className:"spinner-border spinner-border-sm"}),s.a.createElement("span",null,"Change password"))),s.a.createElement(j.a,{style:{display:"none"},ref:function(a){e.checkBtn=a}}))))))}}]),t}(s.a.Component);t(162);var R=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).state={history:"",albums:[],content:[]},n}return Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params;"1"===a.t?f.getBand(a.artistId).then((function(a){var t=a.data;e.setState({cover:t.cover,name:t.name,albums:t.album_band});for(var n=0;n<e.state.albums.length;n++)f.getAlbum(e.state.albums[n]).then((function(a){e.setState({content:e.state.content.concat([a.data])})}))})):f.getArtist(a.artistId).then((function(a){var t=a.data;e.setState({cover:t.photo,name:t.nick_name,albums:t.album_artist,history:t.history});for(var n=0;n<e.state.albums.length;n++)f.getAlbum(e.state.albums[n]).then((function(a){e.setState({content:e.state.content.concat([a.data])})}))}))}},{key:"render",value:function(){return n.createElement("div",{className:"alb"},n.createElement("div",{class:"row row-content",style:{marginTop:"50px"}},n.createElement("div",{className:"col-12"},n.createElement("div",{class:"card mb-3 album",style:{backgroundColor:"#1F222E",color:"#e2e2e2"}},n.createElement("div",{class:"row no-gutters"},n.createElement("div",{class:"col-md-4"},n.createElement("img",{src:this.state.cover,className:"card-img",alt:"..."})),n.createElement("div",{class:"col-md-8"},n.createElement("div",{class:"card-body"},n.createElement("h1",{class:"card-title"},this.state.name),n.createElement("p",{class:"card-text"},this.state.history))))))),n.createElement("div",{className:"row row-content"},n.createElement("div",{className:"col-12"},n.createElement("div",{className:"col text-center"},n.createElement("h1",null,"Albums")),this.state.content.map((function(e,a){return n.createElement("div",null,(t=e.cover,s=e.name,r="/album/"+e.id+"/",n.createElement("div",{className:"responsive"},n.createElement("div",{className:"gallery"},n.createElement("a",{href:r},n.createElement("img",{src:t,alt:"s1",width:"600",height:"400"})),n.createElement("div",{className:"desc"},s)))));var t,s,r})))))}}]),t}(n.Component),W=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).state={currentUser:void 0},n}return Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=g.getUserToken(),a=g.getUserName();e&&this.setState({UserToken:e,UserName:a})}},{key:"logout",value:function(){g.logout()}},{key:"render",value:function(){var e=this.state,a=e.UserToken,t=e.UserName;return s.a.createElement(v.a,null,s.a.createElement("div",null,s.a.createElement("nav",{className:"navbar navbar-expand-md navbar-dark fixed-top"},s.a.createElement("div",{className:"navbar-brand logo"},s.a.createElement(v.b,{to:"/home"},"Music Service")),s.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarToggler","aria-controls":"navbarToggler","aria-expanded":"false","aria-label":"Toggle navigation"},s.a.createElement("span",{className:"navbar-toggler-icon"})),s.a.createElement("div",{className:"collapse navbar-collapse custom-link",id:"navbarToggler"},a&&s.a.createElement("ul",{className:"nav navbar-nav navbar-center"},s.a.createElement("li",{className:"nav-item text-center"},s.a.createElement("div",{className:"nav-link text-center"},s.a.createElement(v.b,{to:"/home"},"Main"))),s.a.createElement("li",{className:"nav-item text-center"},s.a.createElement("div",{className:"nav-link text-center"},s.a.createElement(v.b,{to:"/userlist"},"UserList")))),a?s.a.createElement("ul",{className:"nav navbar-nav ml-auto"},s.a.createElement("li",{className:"nav-item text-center"},s.a.createElement("div",{className:"nav-link text-center"},s.a.createElement(v.b,{to:"/profile"},t))),s.a.createElement("li",{className:"nav-item text-center"},s.a.createElement("div",{className:"nav-link text-center"},s.a.createElement("a",{href:"/home",onClick:this.logout},"Logout")))):s.a.createElement("ul",{className:"nav navbar-nav ml-auto"},s.a.createElement("li",{className:"nav-item text-center"},s.a.createElement("div",{className:"nav-link text-center"},s.a.createElement(v.b,{to:"/login"},"SingIn"))),s.a.createElement("li",{className:"nav-item text-center"},s.a.createElement("div",{className:"nav-link text-center"},s.a.createElement(v.b,{to:"/registration"},"SingUp")))))),s.a.createElement("div",{className:"container-xl "},s.a.createElement(b.c,null,s.a.createElement(b.a,{exact:!0,path:"/login",component:U}),s.a.createElement(b.a,{exact:!0,path:"/registration",component:D}),s.a.createElement(b.a,{exact:!0,path:"/home",component:N}),s.a.createElement(b.a,{exact:!0,path:"/userlist",component:F}),s.a.createElement(b.a,{exact:!0,path:"/profile",component:z}),s.a.createElement(b.a,{exact:!0,path:"/album/:albumId",component:P}),s.a.createElement(b.a,{exact:!0,path:"/pr/:t/:artistId",component:R})))))}}]),t}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(s.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},54:function(e,a,t){e.exports=t(165)},59:function(e,a,t){},60:function(e,a,t){},78:function(e,a,t){},79:function(e,a,t){},86:function(e,a,t){},87:function(e,a,t){}},[[54,1,2]]]);
//# sourceMappingURL=main.70922bd9.chunk.js.map