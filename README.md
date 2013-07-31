# MEAN Resource Base
Provides a basic RESTful CRUD interface. 
@Note resource Schema Must be defined for this module to work.

**Supported RESTFUL routes**

GET   /:resource                Gets all resources
POST  /:resource                Create a new resource
GET   /:resource/:id            Get a single resource
PUT   /:resource/:id            Update a single resource
GET   /:resource/:id/:child     Update a single resource


**Added Bonus**

- /:resource/:id/:child
- limit, skip

**Build Status**

Note this uses the npm MERS module which is not yet ready for production use. Please be warned! 


**Credits**

Code includes pieces from the below
- https://github.com/jspears/mers

Licenses as follows:
- 