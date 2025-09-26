# Manual Pipeline Tests

## Priority

Given a push to main and 'release:' prefix  
When Lint workflow runs and fails  
Then deploy workflow doesn't run  
**PASS**

Given a push to main and 'release:' prefix  
When Lint workflow runs and succeeds  
Then deploy also runs and deploys  
**PASS**

Given a push to main and NOT 'release:' prefix  
When Lint workflow runs and succeeds  
Then deploy doesn't run  
**PASS**

## Deferred

Given a pull request against main and 'release:' prefix  
When Lint workflow runs and succeeds  
Then no other workflows run  
UNKNOWN