package ie.dcu.controller;

import ie.dcu.model.User;
import ie.dcu.security.AuthProvider;
import ie.dcu.service.StorageService;
import io.swagger.annotations.Api;
import org.codehaus.jackson.map.ObjectMapper;

import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.*;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Api
@Path("/user")
public class UserController {


    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response getUsers() throws Exception {
        return Response.status(200).entity(new ObjectMapper().writeValueAsString(StorageService.getUsers())).build();
    }

    @GET
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getUser(@PathParam("id") String id) throws Exception {
        User user = StorageService.getUser(id);
        if (user != null)
            return Response.status(200).entity(new ObjectMapper().writeValueAsString(user)).build();
        else
            return Response.status(404).build();
    }

    @POST
    @Path("/login/{username}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response loginUser(@Context HttpServletRequest request,@PathParam("username") String username) throws Exception {
        if(!AuthProvider.isValidLogin(request)){
            return Response.status(401).build();
        }
        return Response.status(200).entity(new ObjectMapper().writeValueAsString(StorageService.createUserToken(username))).build();
    }

    @DELETE
    @Path("/logout/{username}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response logoutUser(@Context HttpServletRequest request, @PathParam("username") String username) throws Exception {
        if(!AuthProvider.isValidUser(request)){
            return Response.status(401).build();
        }
        StorageService.deleteUserToken(username);
        return Response.status(200).entity(new ObjectMapper().writeValueAsString(username)).build();
    }

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response createUser(User user) throws Exception {
        User existingUser = StorageService.getUser(user.getName());
        if (existingUser == null) {
            user.setPassword(AuthProvider.hashString(user.getPassword()));
            StorageService.createUser(user);
            user.setPassword("");
            return Response.status(201).entity(new ObjectMapper().writeValueAsString(user)).build();
        } else {
            return Response.status(400).build();
        }
    }
}
