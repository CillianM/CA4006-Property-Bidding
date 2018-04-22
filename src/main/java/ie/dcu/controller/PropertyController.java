package ie.dcu.controller;

import ie.dcu.model.Property;
import ie.dcu.security.AuthProvider;
import ie.dcu.service.StorageService;
import io.swagger.annotations.Api;
import org.codehaus.jackson.map.ObjectMapper;

import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.*;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.List;

@Api
@Path("/property")
public class PropertyController {

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response getProperties() throws Exception {
        return Response.status(200).entity((new ObjectMapper().writeValueAsString(StorageService.getProperties()))).build();
    }

    @GET
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getProperty(@PathParam("id") String id) throws Exception {
        Property property = StorageService.getProperty(id);
        if (property != null)
            return Response.status(200).entity(new ObjectMapper().writeValueAsString(property)).build();
        else
            return Response.status(404).build();

    }

    @GET
    @Path("/user/{username}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getUserProperties(@PathParam("username") String username) throws Exception {
        List<Property> properties = StorageService.getUserProperties(username);
        if (properties != null)
            return Response.status(200).entity(new ObjectMapper().writeValueAsString(properties)).build();
        else
            return Response.status(404).build();

    }

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response createProperty(@Context HttpServletRequest request, Property property) throws Exception {
        if(!AuthProvider.isValidUser(request)){
            return Response.status(401).build();
        }
        return Response.status(201).entity(new ObjectMapper().writeValueAsString(StorageService.createProperty(property))).build();
    }
}
