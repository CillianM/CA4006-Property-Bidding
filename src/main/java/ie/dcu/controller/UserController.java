package ie.dcu.controller;

import ie.dcu.model.User;
import ie.dcu.service.StorageService;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/user")
public class UserController {

    @GET
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getUser(@PathParam("id") String id) {
        User user = StorageService.getUser(id);
        if (user != null)
            return Response.status(200).entity(user).build();
        else
            return Response.status(404).build();
    }

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response createUser(User user) {
        return Response.status(201).entity(StorageService.createUser(user)).build();
    }
}
