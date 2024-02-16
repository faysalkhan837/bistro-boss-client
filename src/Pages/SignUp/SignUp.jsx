import { useContext, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import UseAxiosPublic from "../../Components/Hooks/UseAxiosPublic";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";


const SignUp = () => {

  const axiosPublic = UseAxiosPublic();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();
  // reset form after submit--------
  useEffect(() => {
    if (isSubmitSuccessful)
      reset({
        email: '',
        name: '',
        password: '',
        photoUrl: ''

      })
  }, [isSubmitSuccessful, reset])

  const onSubmit = (data) => {
    // console.log(data)

    createUser(data.email, data.password)
      .then(result => {
        console.log(result.user)
        // for update profile
        updateUserProfile(data.name, data.PhotoUrl)
          .then(() => {
            // create user entry in the database
            const userInfo = {
              name: data.name,
              email: data.email
            }
            axiosPublic.post('/users', userInfo)
              .then(res => {
                console.log(res)
                if (res.data.insertedId) {
                  Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "user create successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
                }
              })
            // sweet allert for success update

            // after signUp navigate to Home page
            navigate('/');
          })
          .catch(error => {
            console.error(error);
          })
      })
      .catch(error => {
        console.error(error)
      })
  }


  return (

    <>
      <div>
        <Helmet>
          <title>Bistro Boss || Sign Up</title>
        </Helmet>
      </div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">SingUp now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="name" {...register("name")} name="name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">photo url</span>
                </label>
                {/* name and register should be same name */}
                <input type="text" placeholder="Photo url" {...register("PhotoUrl", { required: true })} className="input input-bordered" required />
                {errors.photoUrl && <span className="text-red-600">URL is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" {...register("email")} name="email" className="input input-bordered" required />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" {...register("password", {
                  required: true,
                  minLength: 6,
                  pattern: /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*[#$@!%&*?]).{8,}/
                })} name="password" className="input input-bordered" required />
                {errors.password && <span className="text-red-600">password is required</span>}
                {errors.password?.type === "pattern" && (
                  <p role="alert">One upper case, one lower case, one spacial carrecter, min 8 carrecter</p>
                )}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input type="submit" value='submit' className="btn btn-primary" />
              </div>
            </form>
            <p className="px-6">Alredy have an acount? go to <Link to='/login'><span>Log in</span></Link></p>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;