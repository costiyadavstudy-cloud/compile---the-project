import { useState, useEffect } from "react";
import "../css/rightPanel.css";

function rightPanel() {
  const [authWay, updateAuthWay] = useState("signUp");

  function logoImg() {}
  return (
    <div>
      {/* <!-- ============================================================
     RIGHT PANEL — Auth form (login state shown by default)
     Pairs with rightPanel.css — same class names used throughout
     ============================================================ --> */}
      {authWay === "login" && (
        <div class="rightPanel">
          {/* <!-- Centers and constrains the form to a readable width --> */}
          <div class="formWrap">
            {/* <!-- Tab bar styled like editor file tabs (login.js / signup.js).
         "tabActive" marks which one is currently selected. --> */}
            <div class="tabRow">
              <button
                onClick={() => {
                  updateAuthWay("login");
                }}
                class="tabBtn tabActive"
              >
                login.js
              </button>
              <button
                onClick={() => {
                  updateAuthWay("signUp");
                }}
                class="tabBtn"
              >
                signup.js
              </button>
            </div>

            {/* <!-- Heading + short description above the form --> */}
            <h2 class="formTitle">Welcome back</h2>
            <p class="formSub">Sign in to pick up your feed.</p>

            <form>
              {/* <!-- ---------- EMAIL FIELD ---------- --> */}
              <div class="fieldBlock">
                {/* <!-- Label styled as a code comment, e.g. "// email" --> */}
                <div class="fieldLabel">// email</div>

                {/* <!-- The bordered input row: gutter number + icon + input --> */}
                <div class="fieldRow">
                  {/* <!-- Line-number gutter, like a code editor's left margin --> */}
                  <span class="gutter">01</span>

                  {/* <!-- Mail icon, drawn as inline SVG (no image file) --> */}
                  <svg
                    class="fieldIcon"
                    viewBox="0 0 24 24"
                    width="15"
                    height="15"
                  >
                    <path
                      d="M4 4h16v16H4z M4 4l8 8 8-8"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  {/* <!-- Actual text input the user types into --> */}
                  <input
                    class="fieldInput"
                    type="email"
                    placeholder="you@domain.dev"
                  />
                </div>
              </div>

              {/* <!-- ---------- PASSWORD FIELD ---------- --> */}
              <div class="fieldBlock">
                <div class="fieldLabel">// password</div>
                <div class="fieldRow">
                  <span class="gutter">02</span>

                  {/* <!-- Lock icon --> */}
                  <svg
                    class="fieldIcon"
                    viewBox="0 0 24 24"
                    width="15"
                    height="15"
                  >
                    <path
                      d="M6 10V7a6 6 0 0 1 12 0v3 M4 10h16v10H4z"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <input
                    class="fieldInput"
                    type="password"
                    placeholder="••••••••"
                  />

                  {/* <!-- Show/hide password toggle button.
               In JS: clicking this swaps the input's type between
               "password" and "text", and swaps this icon between
               the eye / eye-off paths. Purely visual here. --> */}
                  <button
                    type="button"
                    class="toggleBtn"
                    aria-label="Show password"
                  >
                    <svg
                      class="fieldIcon"
                      viewBox="0 0 24 24"
                      width="15"
                      height="15"
                    >
                      <path
                        d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* <!-- "Forgot password" link, right-aligned, login-only --> */}
              <div class="forgotRow">
                <button type="button" class="forgotBtn">
                  forgot_password()
                </button>
              </div>

              {/* <!-- Primary submit button, styled like a function call --> */}
              <button type="submit" class="submitBtn">
                sign_in()
                {/* <!-- Arrow icon --> */}
                <svg viewBox="0 0 24 24" width="15" height="15">
                  <path
                    d="M5 12h14M13 6l6 6-6 6"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </form>

            {/* <!-- Bottom link to switch to the signup form --> */}
            <p
              onClick={() => {
                updateAuthWay("signUp");
              }}
              class="switchRow"
            >
              // new here?
              <button class="switchBtn">create_account()</button>
            </p>
          </div>
        </div>
      )}

      {/* <!-- ============================================================ */}
      {/* RIGHT PANEL — Auth form (signup state)
     Pairs with the same rightPanel.css as the login version
     ============================================================ --> */}
      {authWay === "signUp" && (
        <div class="rightPanel">
          <div class="formWrap">
            {/* <!-- Tab bar — "signup.js" active this time --> */}
            <div class="tabRow">
              <button
                onClick={() => {
                  updateAuthWay("login");
                }}
                class="tabBtn"
              >
                login.js
              </button>
              <button
                onClick={() => {
                  updateAuthWay("signUp");
                }}
                class="tabBtn tabActive"
              >
                signup.js
              </button>
            </div>

            <h2 class="formTitle">Create your account</h2>
            <p class="formSub">Join the community — takes under a minute.</p>

            <form>
              {/* <!-- ---------- HANDLE FIELD (signup only) ---------- --> */}
              <div class="fieldBlock">
                <div class="fieldLabel">// handle</div>
                <div class="fieldRow">
                  <span class="gutter">01</span>

                  {/* <!-- User icon --> */}
                  <svg
                    class="fieldIcon"
                    viewBox="0 0 24 24"
                    width="15"
                    height="15"
                  >
                    <path
                      d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M4 20c0-4.4 3.6-8 8-8s8 3.6 8 8"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <input
                    class="fieldInput"
                    type="text"
                    placeholder="@yourhandle"
                  />
                </div>
              </div>

              {/* <!-- ---------- EMAIL FIELD ---------- --> */}
              <div class="fieldBlock">
                <div class="fieldLabel">// email</div>
                <div class="fieldRow">
                  <span class="gutter">02</span>

                  {/* <!-- Mail icon --> */}
                  <svg
                    class="fieldIcon"
                    viewBox="0 0 24 24"
                    width="15"
                    height="15"
                  >
                    <path
                      d="M4 4h16v16H4z M4 4l8 8 8-8"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <input
                    class="fieldInput"
                    type="email"
                    placeholder="you@domain.dev"
                  />
                </div>
              </div>

              {/* <!-- ---------- PASSWORD FIELD ---------- --> */}
              <div class="fieldBlock">
                <div class="fieldLabel">// password</div>
                <div class="fieldRow">
                  <span class="gutter">03</span>

                  {/* <!-- Lock icon --> */}
                  <svg
                    class="fieldIcon"
                    viewBox="0 0 24 24"
                    width="15"
                    height="15"
                  >
                    <path
                      d="M6 10V7a6 6 0 0 1 12 0v3 M4 10h16v10H4z"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <input
                    class="fieldInput"
                    type="password"
                    placeholder="min 8 characters"
                  />

                  {/* <!-- Show/hide toggle — same behavior as login's password field --> */}
                  <button
                    type="button"
                    class="toggleBtn"
                    aria-label="Show password"
                  >
                    <svg
                      class="fieldIcon"
                      viewBox="0 0 24 24"
                      width="15"
                      height="15"
                    >
                      <path
                        d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* <!-- ---------- CONFIRM PASSWORD FIELD (signup only) ---------- --> */}
              <div class="fieldBlock">
                <div class="fieldLabel">// confirmPassword</div>
                <div class="fieldRow">
                  <span class="gutter">04</span>

                  {/* <!-- Reuses the lock icon --> */}
                  <svg
                    class="fieldIcon"
                    viewBox="0 0 24 24"
                    width="15"
                    height="15"
                  >
                    <path
                      d="M6 10V7a6 6 0 0 1 12 0v3 M4 10h16v10H4z"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <input
                    class="fieldInput"
                    type="password"
                    placeholder="retype password"
                  />

                  {/* <!-- In JS: this should probably toggle in sync with the */}
                  {/* password field above, since they're the same value type --> */}
                  <button
                    type="button"
                    class="toggleBtn"
                    aria-label="Show password"
                  >
                    <svg
                      class="fieldIcon"
                      viewBox="0 0 24 24"
                      width="15"
                      height="15"
                    >
                      <path
                        d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* <!-- No "forgot password" link here — signup doesn't need it --> */}

              {/* <!-- Primary submit button --> */}
              <button type="submit" class="submitBtn">
                create_account()
                <svg viewBox="0 0 24 24" width="15" height="15">
                  <path
                    d="M5 12h14M13 6l6 6-6 6"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </form>

            {/* <!-- Bottom link back to login --> */}
            <p class="switchRow">
              // already have an account?
              <button
                onClick={() => {
                  updateAuthWay("login");
                }}
                class="switchBtn"
              >
                sign_in()
              </button>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default rightPanel;

{
  /* <button onClick={()=>{updateAuthWay('signUp')}} type="button" class="forgotBtn"> */
}
