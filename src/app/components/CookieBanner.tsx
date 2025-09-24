'use client';

import { useState, useEffect } from 'react';
import { usePostHog } from 'posthog-js/react'

export default function CookieBanner() {
  const posthog = usePostHog();

  // set denied on page load so it doesn't flicker
  const [consentGiven, setConsentGiven] = useState('denied');

  useEffect(() => {
    // check consent status
    setConsentGiven(posthog.get_explicit_consent_status())
  }, [posthog]);

  const handleAcceptCookies = () => {
    posthog.opt_in_capturing();
    setConsentGiven('granted');
    console.log("accept")
  };

  const handleDeclineCookies = () => {
    posthog.opt_out_capturing();
    setConsentGiven('denied');
    console.log("decline");
  };

  // TODO: Figure out how to create actual tests for this, for now just manual testing
  // when first visit/consent status unknown, show banner PASS
    // in posthog, status is pending because no _ph_opt_in_out
  // when they select accept, hide banner and show survey
    // in posthog, LS key _ph_opt_in_out is 1 and cookie set
  // when they select decline, don't set cookie and hide banner and don't show survey
    // in posthog, LS key _ph_opt_in_out is 0 and no cookie set
  // when accept or decline is selected, status stays the same on refresh

  return (
    <div>
    {consentGiven === 'pending' && (
    <div className="cookie-banner">
      <div className="cookie-banner-content">
        <div className="cookie-banner-text">
          <p>
            We use cookies to enhance your experience and analyze site usage.
            By clicking &quot;Accept&quot;, you consent to our use of cookies for analytics and personalization.
          </p>
        </div>
        <div className="cookie-banner-buttons">
          <button
            onClick={handleDeclineCookies}
            className="btn-cookie-decline"
          >
            Decline
          </button>
          <button
            onClick={handleAcceptCookies}
            className="btn-cookie-accept"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
    )}
  </div>
  );
}