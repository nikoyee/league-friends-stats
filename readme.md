#Technologies

<table>
   <tr>
      <td><strong><span style="text-decoration:underline;">Backend</span></strong>
      </td>
      <td><strong><span style="text-decoration:underline;">Frontend</span></strong>
      </td>
   </tr>
   <tr>
      <td>
         <ul>
            <li>
               <a href="https://node-postgres.com">PostgreSQL</a>
               <ul>
                  <li><a href="http://docs.sequelizejs.com">Sequelize</a>
               </ul>
            </li>
            <li><a href="https://nodejs.org/en/docs/">NodeJS</a>
            <li><a href="https://expressjs.com">ExpressJS</a>
               <ul>
                  <li><a href="https://github.com/expressjs/body-parser">BodyParser</a></li>
               </ul>
            </li>
         </ul>
      </td>
      <td>
         <ul>
            <li>ReactJS
            <li>Bootstrap</li>
         </ul>
      </td>
   </tr>
</table>


I would like to use these technologies to provide a proof of concept that we are able to use Node w/ Express + PostgreSQL to deliver a basic API service that will return JSON objects.

#Description of app

We will connect with a 3rd party API service that has information on movie reviews and save the information on our backend system and aggregate the data to create something we will use for our own API service.

Our front end service will be created with the objects structure from our backend in mind but at this time we will not attempt to create an environment where the backend/frontend will be able to talk to each other.

#Details

We are using PostgreSQL with Sequelize. Sequelize is an ORM for PostgreSQL. It makes  it a lot easier to understand and develop relational designs with an ORM.

#Roadmap

Sep 7 - 9



*   Set up a local environment for the backend system
*   Create a repo on github
*   Determine the 3rd party API to connect with
*   Begin integration with the 3rd party API
    *   Documentation
    *   Testing



Sep 10 - 16



*   Create the DB schema for the tables we will need
*   Design the system
*   
