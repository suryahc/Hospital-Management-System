import { useState } from 'react'
import Footer from '../Components/Footer'

const Login = () => {
  const [isSignup, setIsSignup] = useState(false)

  // Login state
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // Signup state
  const [name, setName] = useState('')
  const [signupEmail, setSignupEmail] = useState('')
  const [signupPassword, setSignupPassword] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    // TODO: call login API
    console.log('login', { email, password })
  }

  const handleSignup = (e) => {
    e.preventDefault()
    // TODO: call signup API
    console.log('signup', { name, email: signupEmail, password: signupPassword })
    setIsSignup(false)
    setEmail(signupEmail)
  }

  return (
    <div className="min-h-screen flex flex-col mt-14 items-center justify-center bg-gray-50">
      <div className="w-full max-w-[360px] font-medium">
        <div className="bg-white border border-gray-200 rounded p-8 shadow">
          {!isSignup ? (
            <>
              <h1 className="text-2xl font-semibold mb-1">Login</h1>
              <p className="text-xs text-gray-600 mb-4">Please log in to book appointment</p>

              <form onSubmit={handleLogin}>
                <label className="block text-sm mb-1">Email</label>
                <input
                  type="email"
                  className="w-full border rounded px-3 py-2 mb-3"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />

                <label className="block text-sm mb-1">Password</label>
                <input
                  type="password"
                  className="w-full border rounded px-3 py-2 mb-4"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />

                <button type="submit" className="w-full bg-blue-600 text-white py-2 cursor-pointer rounded">
                  Login
                </button>
              </form>

              <p className="text-sm text-center mt-4">
                Create a new account?{' '}
                <button type="button" className="text-blue-600 underline cursor-pointer" onClick={() => setIsSignup(true)}>
                  Click here
                </button>
              </p>
            </>
          ) : (
            <>
              <h1 className="text-2xl font-semibold mb-1">Create Account</h1>
              <p className="text-xs text-gray-600 mb-4">Please sign up to book appointment</p>

              <form onSubmit={handleSignup}>
                <label className="block text-sm mb-1">Full Name</label>
                <input
                  type="text"
                  className="w-full border rounded px-3 py-2 mb-3"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />

                <label className="block text-sm mb-1">Email</label>
                <input
                  type="email"
                  className="w-full border rounded px-3 py-2 mb-3"
                  value={signupEmail}
                  onChange={(e) => setSignupEmail(e.target.value)}
                  required
                />

                <label className="block text-sm mb-1">Password</label>
                <input
                  type="password"
                  className="w-full border rounded px-3 py-2 mb-4"
                  value={signupPassword}
                  onChange={(e) => setSignupPassword(e.target.value)}
                  required
                />

                <button type="submit" className="w-full bg-blue-600 cursor-pointer text-white py-2 rounded">
                  Create account
                </button>
              </form>

              <p className="text-sm text-center mt-4">
                Already have an account?{' '}
                <button type="button" className="text-blue-600 underline cursor-pointer " onClick={() => setIsSignup(false)}>
                  Login here
                </button>
              </p>
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Login
