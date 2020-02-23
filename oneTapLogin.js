


		window.onGoogleYoloLoad = (googleyolo) => {

			const retrievePromise = googleyolo.retrieve({
				supportedAuthMethods: [
				"https://accounts.google.com",
				"googleyolo://id-and-password"
				],
				supportedIdTokenProviders: [
				{
					uri: "https://accounts.google.com",
					// clientId: "309503691448-mn4r9ov5qg4um56bvfoqbb9uvtd3bsqg.apps.googleusercontent.com"
					clientId: "90786684154-bua008m9ktoi7p21l1gvd40ufr2mcbgs.apps.googleusercontent.com"
				}
				]
			});

			retrievePromise.then((credential) => {
						 	 // console.log('credential');
				var idToken=credential.idToken;
				var varUrl='https://www.googleapis.com/oauth2/v3/tokeninfo?id_token='+idToken;

				$.get(varUrl,function(data)
				{
					//		    	console.log(data);
					var user={
						'ID': data.sub,
						'Name':  data.name,
						'Image_URL':data.picture ,
						'Email' : data.email
					};
					// $.post("/welcome/glogin/", user,
						// function(data)
						// {
						/*if (data==0) {
			    	 		window.location.href='<?php echo base_url();?>';
							}
						else
							{
			    	  			window.location.href="<?php echo base_url().'user/profile'?>";
							}*/
							// window.location.href="<?php echo base_url();?>";
						//				console.log(data);
						/*var auth2 = gapi.auth2.getAuthInstance();
						auth2.signOut().then(function () {
							console.log('User signed out.');
						});*/
						// window.location.href="<?php echo base_url().'user/profile'?>";
						/*<?php if($this->session->gsignupFlag){ ?>
							window.location.href="<?php echo base_url().'user/complete'?>";
							<?php }else {?>
								window.location.href=document.referrer;
								<?php }?>*/
							// });
				// });
			});




			const hintPromise = googleyolo.hint({
				supportedAuthMethods: [
				"https://accounts.google.com"
				],
				supportedIdTokenProviders: [
				{
					uri: "https://accounts.google.com",
					clientId: "309503691448-mn4r9ov5qg4um56bvfoqbb9uvtd3bsqg.apps.googleusercontent.com"
				}
				]
			});
			hintPromise.then((credential) => {
				if (credential.idToken)
				{
					var idToken=credential.idToken;
					var varUrl='https://www.googleapis.com/oauth2/v3/tokeninfo?id_token='+idToken;

					$.get(varUrl,function(data)
					{
								//		    	console.log(data);
								var user={
									'ID': data.sub,
									'Name':  data.name,
									'Image_URL':data.picture ,
									'Email' : data.email
								};
								$.post("/welcome/glogin/", user,
									function(data)
									{
										if (data==0) {
								    	 		window.location.href='<?php echo base_url();?>';
												}
											else
												{
								    	  			window.location.href="<?php echo base_url().'user/profile'?>";
												}
										
									/*<?php if($this->session->gsignupFlag){ ?>
										window.location.href="<?php echo base_url().'user/complete'?>";
									<?php }else {?>
										window.location.href=document.referrer;
									<?php }?>*/
									});
							});
				}
			}, (error) => {
				switch (error.type) {
					case "userCanceled":
					// The user closed the hint selector. Depending on the desired UX,
					// request manual sign up or do nothing.
					break;
					case "noCredentialsAvailable":
					// No hint available for the session. Depending on the desired UX,
					// request manual sign up or do nothing.
					break;
					case "requestFailed":
					// The request failed, most likely because of a timeout.
					// You can retry another time if necessary.
					break;
					case "operationCanceled":
					// The operation was programmatically canceled, do nothing.
					break;
					case "illegalConcurrentRequest":
					// Another operation is pending, this one was aborted.
					break;
					case "initializationError":
					// Failed to initialize. Refer to error.message for debugging.
					break;
					case "configurationError":
					// Configuration error. Refer to error.message for debugging.
					break;
					default:
					// Unknown error, do nothing.
				}
			});


							/* if (credential.password) {
								signInWithEmailAndPassword(credential.id, credential.password);
							} else {
//		    useGoogleIdTokenForAuth(credential.idToken);
}
}, (error) => {

	if (error.type === 'noCredentialsAvailable') {
//		    googleyolo.hint(...).then(...);
}
});*/
/*googleyolo.cancelLastOperation().then(() => {
});
googleyolo.disableAutoSignIn().then(() => {
});
*/	
};
