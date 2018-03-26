package ie.dcu.controller;

import ie.dcu.model.Property;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/property")
public class PropertyController {

    @GET
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Property getProperty(@PathParam("id") String id) {

        //TODO get a property from storage based on the id passed in

        return new Property();

    }

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public Response createProperty(Property property) {

        //TODO validate and save the property
        return Response.status(201).entity(new Property()).build();

    }
}
