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
  return (
    <div className="App">
      
        <form onChange={changeHandler} onSubmit={false}>
          <div>
            <label htmlFor="userName" >User Name</label>
            <input type="text" name="userName" onBlur={touchHandler}/>{formValues.isTouched.userName && !formValues.userName && <div>Required</div>}
          </div>
          <div>
            <label htmlFor="email" >Email</label>
            <input type="text" name="email" onBlur={touchHandler}/>{formValues.isTouched.email && !formValues.email && <div>Required</div>}
          </div>
          <div>
            <label htmlFor="userName" >Password</label>
            <input type="password" name="password" onBlur={touchHandler}/>{formValues.isTouched.password && !formValues.password && <div>Required</div>}
          </div>
          <button type="submit" disabled={!formValues.submit}>Submit</button>
        </form>
    </div>
  );
}

export default App;
