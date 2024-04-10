### Implementation of Micro Front Ends through a demo application

- Inspiration [https://www.udemy.com/course/microfrontend-course/?couponCode=ST8MT40924]
- Watch section 6,7 and 8 of the course for CI/CD Pipeline implementation through github actions and    deployment to production using aws s3.

#### Routing requirements
- Both the container + individual sub-apps need routing features
- Sub-apps might need to add in new pages/routes all the time
- We might need to show two or more micro-front-ends at the same time.
- We want to use of-the-shelf routing solutions
- We need navigation features for sub-apps in both hosted mode and in isolation
- If different apps need to communicate information about routing, it should be done in as generic a fashion as possible.
- Use Browser history for container app and Memory history for sub-apps


#### Scenarios regarding Navigation
##### This should be done in as generic a way as possible
1. User click link governed by Container (Browser History).
    - Communicate change down to Marketing
    - Marketings memory history should update its current path

2. User click link governed by Marketing (Memory History).
    - Communicate change up to container
    - Container's Browser History should update its current path