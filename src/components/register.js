import {Button, Input} from '../UI'


const Register = () => {
  return (
    <div className="w-100">
    <main className="form-signin w-25 m-auto mt-5">
      <form>
        <h1 className="h3 mb-3 fw-normal text-center">Please sign in</h1>
        
        <Input 
          type={'text'} 
          label={'Username'} 
          title={'username'}/>
        <Input 
          type={'email'} 
          label={'Email address'} 
          title={'email address'}/>
        <Input 
          type={'password'} 
          label={'Password'} 
          title={'Password'}/>

        <Button title={'Register'} bgColor={'btn-primary w-100'}/>
        
        <p className="mt-5 mb-3 text-muted text-center">© 2017–2022</p>
      </form>
    </main>
  </div>
  )
}

export default Register