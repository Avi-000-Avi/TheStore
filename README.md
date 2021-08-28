# TheStore
A full stack online clothing store complete with real credit checkout. Users can search, sell, add to cart and checkout their favourite items.

The application has six main models — Users, Items, Orders, CartItems, OrderItems, and Roles — all of which are relational and showcase the power of relational GraphQL Queries.

The app also includes many server side bits including authentication, permissions, sending email, uploading images, and charging credit cards.


![home](https://user-images.githubusercontent.com/29177676/128729210-ed649002-147d-4810-b1b4-febd2f23cb12.png)

![signin](https://user-images.githubusercontent.com/29177676/128729301-a56b7df3-2d8f-4632-a736-ff263bc6f915.png)

###Gradient Taken from
https://www.eggradients.com/category/gray-gradient

## Frontend
### React alongside 
  - Next.js for server side rendering, routing and tooling
  - Styled Components for styling
  - Context for Managing Local State
  - Apollo's React Hooks for interfacing with Apollo Client
  - Jest & React Testing Library for Testing

### Apollo Client for Data Management
  - Performing GraphQL Mutations(create, update, delete)
  - Fetching data via GraphQL Queries
  - Caching GraphQL Data
  - Error and Loading UI States
  - Apollo Client replaces the need for redux + data fetching/caching libraries


## Backend
  - Admin Interface to manage data
  - Provides a set of GraphQL CRUD APIs for a MongoDB or Prisma Database
  - Schema Definition
  - Data Relationships
  - Open Source + Self-hosted
  - Built with Node.js, React + Next.js
  - Implementing Query and Mutation Resolvers
  - Custom Server Side Logic
  - Charging Credit Cards with Stripe
  - Sending Email
  - Performing Authentication
  - Managing + Checking Roles + Permissions
