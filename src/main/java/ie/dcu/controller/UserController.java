package ie.dcu.controller;

import ie.dcu.model.Bid;
import ie.dcu.model.User;
import ie.dcu.security.AuthProvider;
import ie.dcu.service.StorageService;
import org.codehaus.jackson.map.ObjectMapper;
import org.codehaus.jackson.map.ObjectWriter;

import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.*;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.io.IOException;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Collection;
import java.util.List;

@Path("/user")
public class UserController {


    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response getUsers() {
        ObjectMapper mapper = new ObjectMapper();
        String bidJson = "";
        try {
            Collection<User> users = StorageService.getUsers();
            bidJson = mapper.writeValueAsString(users);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return Response.status(200).entity(bidJson).build();
    }

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
    @Path("/login/{username}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response loginUser(@Context HttpServletRequest request,@PathParam("username") String username) throws Exception {
        if(!AuthProvider.isValidLogin(request)){
            return Response.status(401).build();
        }
        ObjectMapper mapper = new ObjectMapper();
        return Response.status(200).entity(mapper.writeValueAsString(StorageService.createUserToken(username))).build();
    }

    @DELETE
    @Path("/logout/{username}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response createUser(@Context HttpServletRequest request,@PathParam("username") String username) {
        if(!AuthProvider.isValidUser(request)){
            return Response.status(401).build();
        }
        StorageService.deleteUserToken(username);
        return Response.status(200).build();
    }

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response createUser(User user) {
        user.setPassword(AuthProvider.hashString(user.getPassword()));
        StorageService.createUser(user);
        user.setPassword("");
        return Response.status(201).entity(user).build();
    }
}
