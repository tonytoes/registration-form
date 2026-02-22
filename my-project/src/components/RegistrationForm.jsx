import React from "react";
import "./registrationForm.css";

const RegistrationForm = () => {
  return (
    <div
      class="registration_form d-flex flex-column rounded mt-5 my-4 reg_form"
    >
      <div class="registration_heading text-center fs-4 w-100">
        Registration Form
      </div>
      <form id="form" class="p-4 needs-validation" novalidate>
        <div class="container">
          <div class="row">
            <div class="col-6">
              <label for="firstNameInput" class="mt-3">First Name</label>
              <div class="input-group rounded">
                <span class="input-group-text fa fa-user bg-transparent"></span>
                <input
                  type="text"
                  name="First Name"
                  autocomplete="given-name"
                  class="form-control form-input"
                  placeholder="First Name"
                  required
                />
                <div class="invalid-feedback position-absolute">
                  Please enter your first name
                </div>
              </div>
            </div>

            <div class="col-6">
              <label for="firstNameInput" class="mt-3">Last Name</label>
              <div class="input-group rounded">
                <span class="input-group-text fa fa-user bg-transparent"></span>
                <input
                  type="text"
                  name="Last Name"
                  autocomplete="family-name"
                  class="form-control form-input"
                  placeholder="Last Name"
                  required
                />
                <div class="invalid-feedback position-absolute">
                  Please enter your last name
                </div>
              </div>
            </div>
          </div>

          <div class="row mt-4">
            <div class="col-6">
              <label for="firstNameInput">Username</label>
              <div class="input-group rounded">
                <span
                  class="input-group-text fa fa-user -0 bg-transparent"
                ></span>
                <input
                  type="text"
                  name="Username"
                  autocomplete="nickname"
                  class="form-control form-input"
                  placeholder="Username"
                  required
                />
                <div class="invalid-feedback position-absolute">
                  Please enter your username
                </div>
              </div>
            </div>

            <div class="col-6">
              <label for="firstNameInput">Phone Number</label>
              <div class="input-group rounded">
                <span
                  class="input-group-text fa fa-phone -0 bg-transparent"
                ></span>
                <input
                  type="tel"
                  autocomplete="tel-local"
                  name="Phone Number"
                  class="form-control form-input"
                  placeholder="Phone Number"
                  id="number"
                  required
                />
                <div class="invalid-feedback position-absolute">
                  Please enter your phone number
                </div>
              </div>
            </div>
          </div>

          <div class="row mt-4">
            <div class="col-12">
              <label for="firstNameInput">Email Address</label>
              <div class="input-group rounded">
                <span
                  class="input-group-text fa fa-envelope bg-transparent"
                ></span>
                <input
                  type="email"
                  autocomplete="email"
                  class="form-control"
                  placeholder="Your E-mail Address"
                  id="email"
                  required
                />
                <div class="invalid-feedback position-absolute">
                  Please enter your email address
                </div>
              </div>
            </div>
          </div>

          <div class="row mt-4">
            <div class="col-6">
              <label for="genderInput">Gender</label>
              <select
                name=""
                id="gender"
                aria-label="Gender"
                class="form-select"
                required
              >
                <option selected disabled value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="female">Other</option>
              </select>
              <div class="invalid-feedback">Please select a gender</div>
            </div>

            <div class="col-6">
              <label for="dateInput">Date of Birth</label>
              <input
                type="date"
                name="date"
                class="form-control"
                id="date"
                required
              />
              <div class="invalid-feedback">
                Please select your date of birth
              </div>
            </div>
          </div>

          <div class="row mt-2">
            <div class="col-6">
              <label for="country">Country</label>
              <select
                name="countries"
                id="state"
                autocomplete="address-level1"
                class="form-select"
                required
              >
                <option selected disabled value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="female">Other</option>
              </select>
              <div class="invalid-feedback">Please select a country</div>
            </div>

            <div class="col-6">
              <label for="genderInput">Company Name</label>
              <div class="input-group">
                <input
                  type="text"
                  name="Company Name"
                  class="form-control form-input"
                  placeholder="Company Name"
                  id="Company"
                  required
                />
                <div class="invalid-feedback">
                  Please enter your Company Name
                </div>
              </div>
            </div>
          </div>

          <div class="row mt-3">
            <div class="col-6">
              <label for="genderInput">Home Address</label>
              <div class="input-group">
                <textarea
                  name="Home Address"
                  rows="3"
                  placeholder="Home Address"
                  class="form-control form-input"
                  required
                ></textarea>
                <div class="invalid-feedback position-absolute">
                  Please enter your Home Address
                </div>
              </div>
            </div>

            <div class="col-6">
              <label for="genderInput">Office Address</label>
              <div class="input-group">
                <textarea
                  name="Office Address"
                  rows="3"
                  placeholder="Office Address"
                  class="form-control form-input"
                  required
                ></textarea>
                <div class="invalid-feedback position-absolute">
                  Please enter your Office Address
                </div>
              </div>
            </div>
          </div>

          <div class="row mt-4">
            <div class="col-6">
              <label for="firstNameInput">Password</label>
              <div class="input-group rounded">
                <span class="fa fa-lock input-group-text bg-transparent"></span>
                <input
                  type="password"
                  name="password"
                  class="form-control"
                  placeholder="Password"
                  id="password"
                  required
                />
                <div class="invalid-feedback position-absolute">
                  Password is required
                </div>
              </div>
            </div>
        
            <div class="col-6">
              <label for="firstNameInput">Confirm Password</label>
              <div class="input-group rounded">
                <span class="input-group-text fa fa-lock bg-transparent"></span>
                <input
                  type="password"
                  class="form-control"
                  placeholder="Confirm Password"
                  id="password2"
                  required
                />
                <div class="invalid-feedback position-absolute">
                  Password does not match
                </div>
              </div>
            </div>
          </div>

          <div class="row mt-5">
            <div class="col-12">
              <input type="checkbox" value="" id="check_conditions" required />
              <label for="check_conditions"
                >I agree with the
                <a
                  href=""
                  class="link-css link-underline link-underline-opacity-0"
                  >terms & conditions</a
                ></label
              >
              <div class="invalid-feedback">
                You must agree before submitting
              </div>
            </div>
          </div>

          <div class="row mt-1">
            <div class="col-12">
              <input type="checkbox" value="" id="check_updates" />
              <label for="check_updates">Recieve best offers and updates</label>
            </div>
            <div class="d-flex justify-content-center align-items-center">
              <button
                type="submit"
                name="register"
                class="btn-diagonal rounded w-50 mt-3 reg_form"
              >
                Register
              </button>
            </div>
            <div class="col-12 text-center mt-2">
              <p>
                Already have an account?
                <a
                  href=""
                  class="link-css link-underline link-underline-opacity-0"
                  >Login</a
                >
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default RegistrationForm;