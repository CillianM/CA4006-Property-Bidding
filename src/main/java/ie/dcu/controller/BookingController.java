package ie.dcu.controller;

import ie.dcu.model.Booking;
import ie.dcu.security.AuthProvider;
import ie.dcu.service.StorageService;
import org.codehaus.jackson.map.ObjectMapper;

import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.*;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;

public class BookingController {

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public Response createBooking(@Context HttpServletRequest request, Booking booking) throws Exception {
        if (!AuthProvider.isValidUser(request)) {
            return Response.status(401).build();
        }
        LinkedHashMap<String, Booking> propertyBids = StorageService.addBooking(booking.getPropertyId(), booking);
        List<Booking> bidList = new ArrayList<>(propertyBids.values());
        return Response.status(201).entity(new ObjectMapper().writeValueAsString(bidList)).build();
    }

    @GET
    @Path("/{id}")
    public Response getPropertyBookings(@Context HttpServletRequest request, @PathParam("id") String propertyId) throws Exception {
        if (!AuthProvider.isValidUser(request)) {
            return Response.status(401).build();
        }
        return Response.status(200).entity(new ObjectMapper().writeValueAsString(StorageService.getPropertyBookings(propertyId))).build();
    }

    @GET
    @Path("/{id}/{username}")
    public Response getUserPropertyBookings(@Context HttpServletRequest request, @PathParam("id") String propertyId, @PathParam("id") String username) throws Exception {
        if (!AuthProvider.isValidUser(request)) {
            return Response.status(401).build();
        }
        return Response.status(200).entity(new ObjectMapper().writeValueAsString(StorageService.getUserPropertyBookings(propertyId, username))).build();
    }

    @GET
    @Path("/user/{username}")
    public Response getUserBookings(@Context HttpServletRequest request, @PathParam("username") String username) throws Exception {
        if (!AuthProvider.isValidUser(request)) {
            return Response.status(401).build();
        }
        return Response.status(200).entity(new ObjectMapper().writeValueAsString(StorageService.getUserBookings(username))).build();
    }

    @DELETE
    @Path("/{id}/{bidId}")
    public Response deleteBooking(@Context HttpServletRequest request, @PathParam("id") String propertyId, @PathParam("bidId") String bidId) throws Exception {
        if (!AuthProvider.isValidUser(request)) {
            return Response.status(401).build();
        }
        return Response.status(200).entity(new ObjectMapper().writeValueAsString(StorageService.removeBooking(propertyId, bidId))).build();
    }
}
