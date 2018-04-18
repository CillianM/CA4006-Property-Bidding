package ie.dcu.controller;

import ie.dcu.model.Property;
import ie.dcu.security.AuthProvider;
import ie.dcu.service.StorageService;

import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.*;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.Collection;
import java.util.List;

@Path("/property")
public class PropertyController {

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response getProperties() {
        return Response.status(200).entity(StorageService.getProperties()).build();
    }

    @GET
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getProperty(@PathParam("id") String id) {
        Property property = StorageService.getProperty(id);
        if (property != null)
            return Response.status(200).entity(property).build();
        else
            return Response.status(404).build();

    }

    @GET
    @Path("/user/{username}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getUserProperties(@PathParam("username") String username) {
        List<Property> properties = StorageService.getUserProperties(username);
        if (properties != null)
            return Response.status(200).entity(properties).build();
        else
            return Response.status(404).build();

    }

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response createProperty(@Context HttpServletRequest request, Property property) {
        if(!AuthProvider.isValidUser(request)){
            return Response.status(401).build();
        }
        return Response.status(201).entity(StorageService.createProperty(property)).build();
    }
}
