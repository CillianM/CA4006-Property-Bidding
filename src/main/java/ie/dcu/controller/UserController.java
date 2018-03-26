package ie.dcu.controller;

import ie.dcu.model.User;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/user")
public class UserController {

    @GET
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getUser(@PathParam("id") String id) {

        //TODO get a user from storage based on the id passed in

        return Response.status(200).entity(new User()).build();

    }

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public Response createProperty(User user) {

        //TODO validate and save the user
        return Response.status(201).entity(new User()).build();

    }
}
