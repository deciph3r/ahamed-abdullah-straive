import { useState } from 'react';
import './App.css';

function App() {
  const [formValues, setFormValues] = useState({
    userName: null,
    email: null,
    password: null,
    isTouched : {
      userName: false,
      email: false,
      password: false
    },
    submit : false
  })
  const [listOfUsers,setListOfUsers] = useState([]);
  const touchHandler = (e)=>{
    setFormValues({...formValues, isTouched:{...formValues.isTouched, [e.target.name]: true}})
  }
  const changeHandler = (e) =>{
    const field = e.target.name;
    const value = e.target.value;
    setFormValues({...formValues, [field]:value,
      submit : (formValues.userName && formValues.email && formValues.password)
    });
  }
  const submitHandler = (e) => {
    e.preventDefault();
    const temp = formValues.userName +"#"+formValues.email;
    setListOfUsers((listOfUsers) => [...listOfUsers, temp])
  }
  return (
    <div className="App">
        <form onChange={changeHandler} onSubmit={submitHandler}>
          <h1 class="page-title">Log in</h1>
          <div className="field">
            <label htmlFor="userName" >User Name</label>
            <div>
              <input type="text" name="userName" onBlur={touchHandler}/>
              {formValues.isTouched.userName && !formValues.userName && <div>Required</div>}
            </div>
          </div>
          <div className="field">
            <label htmlFor="email" >Email</label>
            <div>
              <input type="email" name="email" onBlur={touchHandler}/>{formValues.isTouched.email && !formValues.email && <div>Required</div>}
            </div>
          </div>
          <div className="field">
            <label htmlFor="userName" >Password</label>
            <div>
              <input type="password" name="password" onBlur={touchHandler} minLength="6" />{formValues.isTouched.password && !formValues.password && <div>Required</div>}
            </div>
          </div>
          <button type="submit" disabled={!formValues.submit}>Submit</button>
        </form>

        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Email</th>
            </tr>
             {listOfUsers.map((element) => {
               const t = element.split('#')
               return(
                <tr>
                  <td>{t[0]}</td>
                  <td>{t[1]}</td>
              </tr>
               )
             }
             
            )}
        
            
          </tbody>
        </table>
    </div>
  );
}

export default App;
