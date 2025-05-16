import './App.css'
import { useForm} from "react-hook-form"

function App() {
  
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors,isSubmitting },
  } = useForm()

  async function onSubmit(data){
    await new Promise((resolve) =>setTimeout(resolve,5000))
    console.log("submitting the form", data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} >
      <div>
        <label >First Name: </label>
        <input className={errors.firstName ? 'input-error': ""}
        type="text" {...register("firstName", { required: true, maxLength: 20 , minLength: {value:3, message:'Min len should be atleast 3'}})}/>
        {errors.firstName && <p className='error-msg'>{errors.firstName.message}</p>}
      </div>

      <div>
        <label >Middle Name: </label>
        <input className={errors.middleName ? 'input-error': ""}
        type="text" {...register("middleName")}/>
      </div>

      <div>
        <label >Last Name: </label>
        <input className={errors.lastName ? 'input-error': ""}
        type="text" {...register("lastName",
          {
            pattern: {
              value: /^[A-Za-z]+$/i ,
            message : "Last name is not as per the rules."
            }
          }
        )}/>
        {errors.lastName && <p className='error-msg'>{errors.lastName.message}</p>}

      </div>

      <input type="submit" disabled={isSubmitting}
      value={isSubmitting ? "Submitting" : "Submit"} />
    </form>
  )
}

export default App
