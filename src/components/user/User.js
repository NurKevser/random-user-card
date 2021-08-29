import axios from 'axios'
const User = () => {
     /* async function getUser() {
        try {
          const response = await axios.get('https://randomuser.me/api/');
          console.log(response);
        } catch (error) {
          console.error(error);
        }
      } */


     axios.get('https://randomuser.me/api/')
        .then(function (response) {
            // handle success
            console.log(response);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });


     return (
        <div className="users"></div>
     )
};
export default User;