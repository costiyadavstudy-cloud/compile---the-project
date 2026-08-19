import "../css/MainPage.css";

function MainPage() {
  return (
    <div>
      <div class="page">
        {/* <!-- ============ TOP BAR ============ --> */}
        <div class="topbar">
          <div class="logoWrap">
            <div class="logoMark">
              <svg viewBox="0 0 24 24" width="14" height="14">
                <path
                  d="M4 17l6-6-6-6M12 19h8"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <span class="logoText">compile</span>
          </div>

          <div class="searchBar">
            <svg viewBox="0 0 24 24" width="15" height="15">
              <circle
                cx="11"
                cy="11"
                r="7"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              />
              <path
                d="M21 21l-4.3-4.3"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
            <span class="searchText">search compile — or press ⌘K</span>
          </div>

          <div class="topRight">
            <svg viewBox="0 0 24 24" width="18" height="18">
              <path
                d="M6 8a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6z M10 21a2 2 0 0 0 4 0"
                fill="none"
                stroke="currentColor"
                stroke-width="1.75"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <div class="avatar">@u</div>
          </div>
        </div>

        <div class="layout">
          {/* <!-- ============ SIDEBAR ============ --> */}
          <div class="sidebar">
            <button class="navItem navItemActive">
              <svg viewBox="0 0 24 24" width="16" height="16">
                <path
                  d="M4 11a9 9 0 0 1 9-9 9 9 0 0 1 9 9M4 11v8a1 1 0 0 0 1 1h4v-6h6v6h4a1 1 0 0 0 1-1v-8"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span>Feed</span>
            </button>
            <button class="navItem">
              <svg viewBox="0 0 24 24" width="16" height="16">
                <polygon
                  points="6 4 20 12 6 20"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.8"
                  stroke-linejoin="round"
                />
              </svg>
              <span>Playgrounds</span>
            </button>
            <button class="navItem">
              <svg viewBox="0 0 24 24" width="16" height="16">
                <circle
                  cx="9"
                  cy="8"
                  r="3"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.8"
                />
                <circle
                  cx="17"
                  cy="9"
                  r="2.5"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.8"
                />
                <path
                  d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M15 14.5c2.5.3 4 2 4 5.5"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.8"
                  stroke-linecap="round"
                />
              </svg>
              <span>Debug rooms</span>
            </button>
            <button class="navItem">
              <svg viewBox="0 0 24 24" width="16" height="16">
                <circle
                  cx="12"
                  cy="12"
                  r="9"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.8"
                />
                <path
                  d="M12 7v5l3 2"
                  stroke="currentColor"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  fill="none"
                />
              </svg>
              <span>Bounty board</span>
            </button>
            <button class="navItem">
              <svg viewBox="0 0 24 24" width="16" height="16">
                <path
                  d="M8 4h8v4a4 4 0 0 1-8 0V4z M6 6H4a2 2 0 0 0 2 3 M18 6h2a2 2 0 0 1-2 3 M12 12v4 M9 20h6 M10 16h4v4h-4z"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span>Code quests</span>
            </button>
            <button class="navItem">
              <svg viewBox="0 0 24 24" width="16" height="16">
                <circle
                  cx="12"
                  cy="12"
                  r="9"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.8"
                />
                <path
                  d="M12 8v4l3 3"
                  stroke="currentColor"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  fill="none"
                />
                <circle cx="12" cy="12" r="1.5" fill="currentColor" />
              </svg>
              <span>Standup rooms</span>
            </button>
            <button class="navItem">
              <svg viewBox="0 0 24 24" width="16" height="16">
                <circle
                  cx="12"
                  cy="12"
                  r="9"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.8"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="4"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.8"
                />
                <circle cx="12" cy="12" r="0.8" fill="currentColor" />
              </svg>
              <span>Job radar</span>
            </button>
            <button class="navItem">
              <svg viewBox="0 0 24 24" width="16" height="16">
                <path
                  d="M6 4h12v17l-6-3-6 3V4z"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.8"
                  stroke-linejoin="round"
                />
              </svg>
              <span>Snippet vault</span>
            </button>

            <div class="navDivider"></div>

            <button class="navItem">
              <svg viewBox="0 0 24 24" width="16" height="16">
                <circle
                  cx="12"
                  cy="12"
                  r="3"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.8"
                />
                <path
                  d="M19 12a7 7 0 0 0-.1-1.2l2-1.6-2-3.4-2.4 1a7 7 0 0 0-2-1.2L14 3h-4l-.5 2.6a7 7 0 0 0-2 1.2l-2.4-1-2 3.4 2 1.6A7 7 0 0 0 5 12c0 .4 0 .8.1 1.2l-2 1.6 2 3.4 2.4-1a7 7 0 0 0 2 1.2L10 21h4l.5-2.6a7 7 0 0 0 2-1.2l2.4 1 2-3.4-2-1.6c.1-.4.1-.8.1-1.2z"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.4"
                  stroke-linejoin="round"
                />
              </svg>
              <span>Settings</span>
            </button>
          </div>

          {/* <!-- ============ MAIN CONTENT ============ --> */}
          <div class="main">
              <div class="mainCol">
                {/* <!-- Hero --> */}
                <div class="hero">
                  <h1 class="heroTitle">
                    Welcome to compile,{" "}
                    <span class="accentText">@yourhandle</span>
                  </h1>
                  <p class="heroSub">
                    Your account is set up. Here's everything you can do — jump
                    in wherever looks good.
                  </p>
                </div>

                {/* <!-- Status + streak --> */}
                <div class="statusRow">
                  <div class="statusCard">
                    <div class="statusLabel">// now building</div>
                    <div class="statusInputRow">
                      <div class="statusInputWrap">
                        <svg viewBox="0 0 24 24" width="14" height="14">
                          <polyline
                            points="16 18 22 12 16 6"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <polyline
                            points="8 6 2 12 8 18"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <input
                          class="statusInput"
                          type="text"
                          placeholder="a rate limiter for our public API"
                        />
                      </div>
                      <button class="statusBtn">set_status()</button>
                    </div>
                  </div>

                  <div class="streakCard">
                    <div class="streakHeader">
                      <svg viewBox="0 0 24 24" width="14" height="14">
                        <path
                          d="M12 2c1 4-3 5-3 9a3 3 0 0 0 6 0c0-2-1-3-1-3s3 1 3 5a6 6 0 0 1-12 0c0-6 5-6 7-11z"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="1.8"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <span>12 day streak</span>
                    </div>
                    <div class="streakGrid">
                      <div class="streakCell"></div>
                      <div class="streakCell"></div>
                      <div class="streakCell"></div>
                      <div class="streakCell"></div>
                      <div class="streakCell"></div>
                      <div class="streakCell"></div>
                      <div class="streakCell"></div>
                      <div class="streakCell"></div>
                      <div class="streakCell"></div>
                      <div class="streakCell"></div>
                      <div class="streakCell"></div>
                      <div class="streakCell"></div>
                      <div class="streakCell"></div>
                      <div class="streakCell"></div>
                      <div class="streakCell"></div>
                      <div class="streakCell"></div>
                      <div class="streakCell"></div>
                      <div class="streakCell"></div>
                      <div class="streakCell"></div>
                      <div class="streakCell"></div>
                      <div class="streakCell"></div>
                      <div class="streakCell"></div>
                      <div class="streakCell"></div>
                      <div class="streakCell"></div>
                      <div class="streakCell"></div>
                      <div class="streakCell"></div>
                      <div class="streakCell"></div>
                      <div class="streakCell"></div>
                      <div class="streakCell"></div>
                      <div class="streakCell"></div>
                      <div class="streakCell"></div>
                      <div class="streakCell"></div>
                      <div class="streakCell"></div>
                      <div class="streakCell"></div>
                      <div class="streakCell"></div>
                      <div class="streakCell"></div>
                      <div class="streakCell"></div>
                      <div class="streakCell"></div>
                      <div class="streakCell"></div>
                      <div class="streakCell"></div>
                      <div class="streakCell"></div>
                      <div class="streakCell"></div>
                      <div class="streakCell"></div>
                      <div class="streakCell"></div>
                      <div class="streakCell"></div>
                      <div class="streakCell"></div>
                      <div class="streakCell"></div>
                      <div class="streakCell"></div>
                      <div class="streakCell"></div>
                      <div class="streakCell"></div>
                      <div class="streakCell"></div>
                      <div class="streakCell"></div>
                      <div class="streakCell"></div>
                      <div class="streakCell"></div>
                      <div class="streakCell"></div>
                      <div class="streakCell"></div>
                      <div class="streakCell"></div>
                      <div class="streakCell"></div>
                      <div class="streakCell"></div>
                      <div class="streakCell"></div>
                      <div class="streakCell"></div>
                      <div class="streakCell"></div>
                      <div class="streakCell"></div>
                      <div class="streakCell"></div>
                      <div class="streakCell"></div>
                      <div class="streakCell"></div>
                      <div class="streakCell"></div>
                      <div class="streakCell"></div>
                      <div class="streakCell"></div>
                      <div class="streakCell"></div>
                      <div class="streakCell"></div>
                      <div class="streakCell"></div>
                      <div class="streakCell"></div>
                      <div class="streakCell"></div>
                      <div class="streakCell"></div>
                      <div class="streakCell"></div>
                      <div class="streakCell"></div>
                      <div class="streakCell"></div>
                      <div class="streakCell"></div>
                      <div class="streakCell"></div>
                      <div class="streakCell"></div>
                      <div class="streakCell"></div>
                      <div class="streakCell"></div>
                      <div class="streakCell"></div>
                      <div class="streakCell"></div>
                      <div class="streakCell"></div>
                      <div class="streakCell"></div>
                      <div class="streakCell"></div>
                      <div class="streakCell"></div>
                      <div class="streakCell"></div>
                      <div class="streakCell"></div>
                    </div>
                  </div>
                </div>

                {/* <!-- Feature grid --> */}
                <div class="sectionLabel">// explore what compile can do</div>
                <div class="featureGrid">
                  <div class="featureCard accent-violet">
                    <div class="featureIconWrap">
                      <svg viewBox="0 0 24 24" width="18" height="18">
                        <polygon
                          points="6 4 20 12 6 20"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="1.9"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div class="featureTitle">Live playgrounds</div>
                    <div class="featureDesc">
                      Spin up a runnable code sandbox, drop it in a post, and
                      let people fork and run it inline — no setup, no clone.
                    </div>
                    <div class="featureCta">
                      Open a playground{" "}
                      <svg viewBox="0 0 24 24" width="13" height="13">
                        <path
                          d="M5 12h14M13 6l6 6-6 6"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>

                  <div class="featureCard accent-blue">
                    <div class="featureIconWrap">
                      <svg viewBox="0 0 24 24" width="18" height="18">
                        <circle
                          cx="9"
                          cy="8"
                          r="3"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="1.8"
                        />
                        <circle
                          cx="17"
                          cy="9"
                          r="2.5"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="1.8"
                        />
                        <path
                          d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M15 14.5c2.5.3 4 2 4 5.5"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="1.8"
                          stroke-linecap="round"
                        />
                      </svg>
                    </div>
                    <div class="featureTitle">Debug together</div>
                    <div class="featureDesc">
                      Share your terminal and cursor in real time. Drop a stack
                      trace and pull someone in to debug it live with you.
                    </div>
                    <div class="featureCta">
                      Start a session{" "}
                      <svg viewBox="0 0 24 24" width="13" height="13">
                        <path
                          d="M5 12h14M13 6l6 6-6 6"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>

                  <div class="featureCard accent-amber">
                    <div class="featureIconWrap">
                      <svg viewBox="0 0 24 24" width="18" height="18">
                        <circle
                          cx="12"
                          cy="12"
                          r="9"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="1.8"
                        />
                        <path
                          d="M12 7v5l3 2"
                          stroke="currentColor"
                          stroke-width="1.8"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          fill="none"
                        />
                      </svg>
                    </div>
                    <div class="featureTitle">Bounty board</div>
                    <div class="featureDesc">
                      Post a bug or a feature with a reputation or cash bounty
                      attached. First working PR takes it.
                    </div>
                    <div class="featureCta">
                      Browse bounties{" "}
                      <svg viewBox="0 0 24 24" width="13" height="13">
                        <path
                          d="M5 12h14M13 6l6 6-6 6"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>

                  <div class="featureCard accent-teal">
                    <div class="featureIconWrap">
                      <svg viewBox="0 0 24 24" width="18" height="18">
                        <circle
                          cx="12"
                          cy="12"
                          r="9"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="1.8"
                        />
                        <path
                          d="M12 8v4l3 3"
                          stroke="currentColor"
                          stroke-width="1.8"
                          stroke-linecap="round"
                          fill="none"
                        />
                        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                      </svg>
                    </div>
                    <div class="featureTitle">Standup rooms</div>
                    <div class="featureDesc">
                      Drop-in audio rooms for daily standups, AMAs, or just
                      working out loud with your stack's community.
                    </div>
                    <div class="featureCta">
                      See who's live{" "}
                      <svg viewBox="0 0 24 24" width="13" height="13">
                        <path
                          d="M5 12h14M13 6l6 6-6 6"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>

                  <div class="featureCard accent-violet">
                    <div class="featureIconWrap">
                      <svg viewBox="0 0 24 24" width="18" height="18">
                        <path
                          d="M8 4h8v4a4 4 0 0 1-8 0V4z M6 6H4a2 2 0 0 0 2 3 M18 6h2a2 2 0 0 1-2 3 M12 12v4 M9 20h6 M10 16h4v4h-4z"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="1.6"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div class="featureTitle">Code quests</div>
                    <div class="featureDesc">
                      Structured challenge trails that build toward a skill
                      badge — from "first PR" to "shipped in prod."
                    </div>
                    <div class="featureCta">
                      Pick a quest{" "}
                      <svg viewBox="0 0 24 24" width="13" height="13">
                        <path
                          d="M5 12h14M13 6l6 6-6 6"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>

                  <div class="featureCard accent-blue">
                    <div class="featureIconWrap">
                      <svg viewBox="0 0 24 24" width="18" height="18">
                        <circle
                          cx="12"
                          cy="12"
                          r="9"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="1.8"
                        />
                        <circle
                          cx="12"
                          cy="12"
                          r="4"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="1.8"
                        />
                        <circle cx="12" cy="12" r="0.8" fill="currentColor" />
                      </svg>
                    </div>
                    <div class="featureTitle">Tech radar</div>
                    <div class="featureDesc">
                      A trending feed tuned to your actual stack — what's
                      gaining traction in the frameworks and tools you use.
                    </div>
                    <div class="featureCta">
                      View your radar{" "}
                      <svg viewBox="0 0 24 24" width="13" height="13">
                        <path
                          d="M5 12h14M13 6l6 6-6 6"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>

                  <div class="featureCard accent-amber">
                    <div class="featureIconWrap">
                      <svg viewBox="0 0 24 24" width="18" height="18">
                        <circle
                          cx="9"
                          cy="8"
                          r="3"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="1.8"
                        />
                        <path
                          d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M17 6v6M14 9h6"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="1.8"
                          stroke-linecap="round"
                        />
                      </svg>
                    </div>
                    <div class="featureTitle">Pair match</div>
                    <div class="featureDesc">
                      Get matched with someone to pair-program with, filtered by
                      stack, timezone, and what you're trying to learn.
                    </div>
                    <div class="featureCta">
                      Find a partner{" "}
                      <svg viewBox="0 0 24 24" width="13" height="13">
                        <path
                          d="M5 12h14M13 6l6 6-6 6"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>

                  <div class="featureCard accent-teal">
                    <div class="featureIconWrap">
                      <svg viewBox="0 0 24 24" width="18" height="18">
                        <path
                          d="M6 4h12v17l-6-3-6 3V4z"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="1.8"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div class="featureTitle">Snippet vault</div>
                    <div class="featureDesc">
                      Save, tag, and reuse the code you keep rewriting. Share
                      vault items publicly and let others fork them.
                    </div>
                    <div class="featureCta">
                      Open your vault{" "}
                      <svg viewBox="0 0 24 24" width="13" height="13">
                        <path
                          d="M5 12h14M13 6l6 6-6 6"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

            {/* <!-- ============ RIGHT RAIL ============ --> */}
            <div class="rightRail">
              <div class="roomsCard">
                <div class="roomsHeader">
                  <svg viewBox="0 0 24 24" width="14" height="14">
                    <path
                      d="M12 2a4 4 0 0 1 4 4v6a4 4 0 0 1-8 0V6a4 4 0 0 1 4-4z"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.8"
                    />
                    <path
                      d="M6 11a6 6 0 0 0 12 0M12 19v3"
                      stroke="currentColor"
                      stroke-width="1.8"
                      stroke-linecap="round"
                      fill="none"
                    />
                  </svg>
                  <span>Live right now</span>
                </div>

                <div class="roomItem">
                  <div>
                    <div class="roomName">Debugging a race condition</div>
                    <div class="roomMeta">Go · concurrency · 4 in room</div>
                  </div>
                  <svg viewBox="0 0 24 24" width="14" height="14">
                    <path
                      d="M9 6l6 6-6 6"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div class="roomItem">
                  <div>
                    <div class="roomName">Rust borrow checker AMA</div>
                    <div class="roomMeta">Rust · standup · 12 in room</div>
                  </div>
                  <svg viewBox="0 0 24 24" width="14" height="14">
                    <path
                      d="M9 6l6 6-6 6"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div class="roomItem last">
                  <div>
                    <div class="roomName">Refactor review: auth flow</div>
                    <div class="roomMeta">TypeScript · pairing · 3 in room</div>
                  </div>
                  <svg viewBox="0 0 24 24" width="14" height="14">
                    <path
                      d="M9 6l6 6-6 6"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>

              <div class="radarCard">
                <div class="radarHeader">
                  <svg viewBox="0 0 24 24" width="14" height="14">
                    <circle
                      cx="12"
                      cy="12"
                      r="9"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.8"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="4"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.8"
                    />
                    <circle cx="12" cy="12" r="0.8" fill="currentColor" />
                  </svg>
                  <span>Your tech radar</span>
                </div>

                <div class="radarItem">
                  <div class="radarName">Bun 1.4</div>
                  <div class="radarNote">runtime · trending in your stack</div>
                </div>
                <div class="radarItem">
                  <div class="radarName">Zod v4</div>
                  <div class="radarNote">
                    validation · +38% mentions this week
                  </div>
                </div>
                <div class="radarItem last">
                  <div class="radarName">Tanstack DB</div>
                  <div class="radarNote">
                    new · 6 people you follow starred it
                  </div>
                </div>
              </div>

              <div class="gitLine">
                <svg viewBox="0 0 24 24" width="12" height="12">
                  <line
                    x1="6"
                    y1="3"
                    x2="6"
                    y2="15"
                    stroke="currentColor"
                    stroke-width="1.75"
                  />
                  <circle
                    cx="18"
                    cy="6"
                    r="3"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.75"
                  />
                  <circle
                    cx="6"
                    cy="18"
                    r="3"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.75"
                  />
                  <path
                    d="M18 9a9 9 0 0 1-9 9"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.75"
                  />
                </svg>
                <span>main · last push 4 min ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
