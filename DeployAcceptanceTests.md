# Manual Pipeline Tests

Given a push to main and 'release:' prefix
When Lint workflow runs and fails
Then deploy workflow doesn't run
UNKNOWN

Given a push to main and 'release:' prefix
When Lint workflow runs and succeeds
Then deploy also runs and deploys
PASS

Given a push to main and NOT 'release:' prefix
When Lint workflow runs and succeeds
Then deploy doesn't run
PASS

Given a pull request against main and 'release:' prefix
When Lint workflow runs and succeeds
Then no other workflows run
UNKNOWN