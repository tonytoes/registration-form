import React from "react";
import "./registrationForm.css";

const RegistrationForm = () => {
  return (
    <div className="registration_form d-flex flex-column rounded mt-5 my-4 reg_form">
    <div className="registration_heading text-center fs-4 w-100">
      Registration Form
    </div>
    <form id="form" className="p-4 needs-validation" noValidate="">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <label htmlFor="firstNameInput" className="mt-3">
              First Name
            </label>
            <div className="input-group rounded">
              <span className="input-group-text fa fa-user bg-transparent" />
              <input
                type="text"
                name="First Name"
                autoComplete="given-name"
                className="form-control form-input"
                placeholder="First Name"
                required=""
              />
              <div className="invalid-feedback position-absolute">
                Please enter your first name
              </div>
            </div>
          </div>
          <div className="col-6">
            <label htmlFor="firstNameInput" className="mt-3">
              Last Name
            </label>
            <div className="input-group rounded">
              <span className="input-group-text fa fa-user bg-transparent" />
              <input
                type="text"
                name="Last Name"
                autoComplete="family-name"
                className="form-control form-input"
                placeholder="Last Name"
                required=""
              />
              <div className="invalid-feedback position-absolute">
                Please enter your last name
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-6">
            <label htmlFor="firstNameInput">Username</label>
            <div className="input-group rounded">
              <span className="input-group-text fa fa-user -0 bg-transparent" />
              <input
                type="text"
                name="Username"
                autoComplete="nickname"
                className="form-control form-input"
                placeholder="Username"
                required=""
              />
              <div className="invalid-feedback position-absolute">
                Please enter your username
              </div>
            </div>
          </div>
          <div className="col-6">
            <label htmlFor="firstNameInput">Phone Number</label>
            <div className="input-group rounded">
              <span className="input-group-text fa fa-phone -0 bg-transparent" />
              <input
                type="tel"
                autoComplete="tel-local"
                name="Phone Number"
                className="form-control form-input"
                placeholder="Phone Number"
                id="number"
                required=""
              />
              <div className="invalid-feedback position-absolute">
                Please enter your phone number
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12">
            <label htmlFor="firstNameInput">Email Address</label>
            <div className="input-group rounded">
              <span className="input-group-text fa fa-envelope bg-transparent" />
              <input
                type="email"
                autoComplete="email"
                className="form-control"
                placeholder="Your E-mail Address"
                id="email"
                required=""
              />
              <div className="invalid-feedback position-absolute">
                Please enter your email address
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-6">
            <label htmlFor="genderInput">Gender</label>
            <select
              name=""
              id="gender"
              aria-label="Gender"
              className="form-select"
              required=""
            >
              <option selected="" disabled="" value="">
                Select
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="female">Other</option>
            </select>
            <div className="invalid-feedback">Please select a gender</div>
          </div>
          <div className="col-6">
            <label htmlFor="dateInput">Date of Birth</label>
            <input
              type="date"
              name="date"
              className="form-control"
              id="date"
              required=""
            />
            <div className="invalid-feedback">
              Please select your date of birth
            </div>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-6">
            <label htmlFor="country">Country</label>
            <select
              name="countries"
              id="state"
              autoComplete="address-level1"
              className="form-select"
              required=""
            >
              <option selected="" disabled="" value="">
                Select
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="female">Other</option>
            </select>
            <div className="invalid-feedback">Please select a country</div>
          </div>
          <div className="col-6">
            <label htmlFor="genderInput">Company Name</label>
            <div className="input-group">
              <input
                type="text"
                name="Company Name"
                className="form-control form-input"
                placeholder="Company Name"
                id="Company"
                required=""
              />
              <div className="invalid-feedback">
                Please enter your Company Name
              </div>
            </div>
          </div>
        </div>
        {/* Home Address */}
        <div className="row mt-3">
          <div className="col-6">
            <label htmlFor="genderInput">Home Address</label>
            <div className="input-group">
              <textarea
                name="Home Address"
                rows={3}
                placeholder="Home Address"
                className="form-control form-input"
                required=""
                defaultValue={""}
              />
              <div className="invalid-feedback position-absolute">
                Please enter your Home Address
              </div>
            </div>
          </div>
          {/* Office Address */}
          <div className="col-6">
            <label htmlFor="genderInput">Office Address</label>
            <div className="input-group">
              <textarea
                name="Office Address"
                rows={3}
                placeholder="Office Address"
                className="form-control form-input"
                required=""
                defaultValue={""}
              />
              <div className="invalid-feedback position-absolute">
                Please enter your Office Address
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          {/* Password */}
          <div className="col-6">
            <label htmlFor="firstNameInput">Password</label>
            <div className="input-group rounded">
              <span className="fa fa-lock input-group-text bg-transparent" />
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Password"
                id="password"
                required=""
              />
              <div className="invalid-feedback position-absolute">
                Password is required
              </div>
            </div>
          </div>
          {/* Confirmation */}
          <div className="col-6">
            <label htmlFor="firstNameInput">Confirm Password</label>
            <div className="input-group rounded">
              <span className="input-group-text fa fa-lock bg-transparent" />
              <input
                type="password"
                className="form-control"
                placeholder="Confirm Password"
                id="password2"
                required=""
              />
              <div className="invalid-feedback position-absolute">
                Password does not match
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12">
            <input
              type="checkbox"
              defaultValue=""
              id="check_conditions"
              required=""
            />
            <label htmlFor="check_conditions">
              I agree with the
              <a
                href=""
                className="link-css link-underline link-underline-opacity-0"
              >
                terms &amp; conditions
              </a>
            </label>
            <div className="invalid-feedback">
              You must agree before submitting
            </div>
          </div>
        </div>
        <div className="row mt-1">
          <div className="col-12">
            <input type="checkbox" defaultValue="" id="check_updates" />
            <label htmlFor="check_updates">
              Recieve best offers and updates
            </label>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <button
              type="submit"
              name="register"
              className="btn-diagonal rounded w-50 mt-3 reg_form"
            >
              Register
            </button>
          </div>
          <div className="col-12 text-center mt-2">
            <p>
              Already have an account?
              <a
                href=""
                className="link-css link-underline link-underline-opacity-0"
              >
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </form>
  </div>
  );
};

export default RegistrationForm;