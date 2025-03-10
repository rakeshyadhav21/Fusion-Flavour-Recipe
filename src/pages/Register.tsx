import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { ChefHat, UserPlus, Loader2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useGoogleLogin } from '@react-oauth/google';

const Register: React.FC = () => {
  const [acceptedTerms, setAcceptedTerms] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { signUp, isLoading, googleSignIn } = useAuth();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrors({});
    const { name, email, password, confirmPassword } = formData;
    
    if (password !== confirmPassword) {
      setErrors({ confirmPassword: "Passwords do not match" });
      return;
    }
    
    try {
      await signUp(name, email, password);
    } catch (err: any) {
      setErrors({ submit: err.message });
    }
  };

  const handleGoogleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        await googleSignIn(tokenResponse.access_token);
      } catch (err: any) {
        setErrors({ submit: err.message });
      }
    },
    onError: () => setErrors({ submit: 'Google login failed. Please try again.' }),
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-lg w-full">
        <div className="text-center">
          <div className="flex justify-center items-center w-16 h-16 bg-primary-200 rounded-full mx-auto mb-4">
            <ChefHat className="h-10 w-10 text-primary" />
          </div>
          <h1 className="text-2xl font-bold">Sign Up</h1>
          <p className="text-gray-600 text-sm">Join Flavour Fusion and start creating amazing recipes</p>
        </div>

        {errors.submit && (
          <div className="bg-red-100 text-red-700 p-3 rounded-lg my-4 text-sm">{errors.submit}</div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" className="input" />
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="input" />
          <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" className="input" />
          <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder="Confirm Password" className="input" />
          {errors.confirmPassword && <p className="text-red-600 text-sm">{errors.confirmPassword}</p>}
          
          <div className="flex items-center space-x-2">
            <input type="checkbox" checked={acceptedTerms} onChange={() => setAcceptedTerms(!acceptedTerms)} className="w-4 h-4" />
            <label className="text-sm">I agree to the <a href="#" className="text-primary">Terms of Service</a> & <a href="#" className="text-primary">Privacy Policy</a></label>
          </div>
          <button type="submit" disabled={isLoading} className="btn-primary w-full">
            {isLoading ? <Loader2 className="animate-spin" /> : <UserPlus />} Create Account
          </button>
        </form>

        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="px-2 text-gray-500 text-sm">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <button onClick={()=>handleGoogleLogin()} className="btn-secondary w-full">
          <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google logo" className="h-5 w-5" /> Continue with Google
        </button>

        <p className="text-center text-sm mt-4">
          Already have an account? <Link to="/sign-in" className="text-primary font-medium">Sign in</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
