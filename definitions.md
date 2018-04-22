
- [API Definitons](#api-definitions)
	- [/bid](#bid)
	- [/bid/user/{username}](#biduserusername)
	- [/bid/{id}](#bid--id-)
	- [/bid/{id}/{username}](#bididusername-)
	- [/booking](#booking)
	- [/booking/user/{username}](#bookinguserusername-)
	- [/booking/{id}](#booking--id-)
	- [/booking/{id}/{bidId}](#bookingidbidid-)
	- [/booking/{id}/{username}](#bookingidusername-)
	- [/property](#property)
	- [/property/user/{username}](#propertyuserusername-)
	- [/property/{id}](#propertyid)
	- [/user](#user)
	- [/user/login/{username}](#userloginusername-)
	- [/user/logout/{username}](#userlogoutusername)
	- [/user/{id}](#userid)
- [Models](#models)
	- [User](#user-object)
	- [Booking](#booking-object)
	- [Bid](#bid-object)
	- [Property](#property-object)

## API Definitions 
### /bid
---
##### ***POST***
**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| body | body |  | No | [Bid](#bid) |

**Responses**

| Code | Description |
| ---- | ----------- |
| default | successful operation |

### /bid/user/{username}
---
##### ***GET***
**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| username | path |  | Yes | string |

**Responses**

| Code | Description |
| ---- | ----------- |
| default | successful operation |

### /bid/{id}
---
##### ***GET***
**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path |  | Yes | string |

**Responses**

| Code | Description |
| ---- | ----------- |
| default | successful operation |

### /bid/{id}/{username}
---
##### ***GET***
**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path |  | Yes | string |
| id | path |  | Yes | string |

**Responses**

| Code | Description |
| ---- | ----------- |
| default | successful operation |

##### ***DELETE***
**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path |  | Yes | string |
| username | path |  | Yes | string |

**Responses**

| Code | Description |
| ---- | ----------- |
| default | successful operation |

### /booking
---
##### ***POST***
**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| body | body |  | No | [Booking](#booking) |

**Responses**

| Code | Description |
| ---- | ----------- |
| default | successful operation |

### /booking/user/{username}
---
##### ***GET***
**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| username | path |  | Yes | string |

**Responses**

| Code | Description |
| ---- | ----------- |
| default | successful operation |

### /booking/{id}
---
##### ***GET***
**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path |  | Yes | string |

**Responses**

| Code | Description |
| ---- | ----------- |
| default | successful operation |

### /booking/{id}/{bidId}
---
##### ***DELETE***
**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path |  | Yes | string |
| bidId | path |  | Yes | string |

**Responses**

| Code | Description |
| ---- | ----------- |
| default | successful operation |

### /booking/{id}/{username}
---
##### ***GET***
**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path |  | Yes | string |
| id | path |  | Yes | string |

**Responses**

| Code | Description |
| ---- | ----------- |
| default | successful operation |

### /property
---
##### ***GET***
**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |

**Responses**

| Code | Description |
| ---- | ----------- |
| default | successful operation |

##### ***POST***
**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| body | body |  | No | [Property](#property) |

**Responses**

| Code | Description |
| ---- | ----------- |
| default | successful operation |

### /property/user/{username}
---
##### ***GET***
**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| username | path |  | Yes | string |

**Responses**

| Code | Description |
| ---- | ----------- |
| default | successful operation |

### /property/{id}
---
##### ***GET***
**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path |  | Yes | string |

**Responses**

| Code | Description |
| ---- | ----------- |
| default | successful operation |

### /user
---
##### ***GET***
**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |

**Responses**

| Code | Description |
| ---- | ----------- |
| default | successful operation |

##### ***POST***
**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| body | body |  | No | [User](#user) |

**Responses**

| Code | Description |
| ---- | ----------- |
| default | successful operation |

### /user/login/{username}
---
##### ***POST***
**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| username | path |  | Yes | string |

**Responses**

| Code | Description |
| ---- | ----------- |
| default | successful operation |

### /user/logout/{username}
---
##### ***DELETE***
**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| username | path |  | Yes | string |

**Responses**

| Code | Description |
| ---- | ----------- |
| default | successful operation |

### /user/{id}
---
##### ***GET***
**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path |  | Yes | string |

**Responses**

| Code | Description |
| ---- | ----------- |
| default | successful operation |

### Models
---

### User Object  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| password | string |  | No |
| name | string |  | No |

### Booking Object 

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | string |  | No |
| userId | string |  | No |
| propertyId | string |  | No |
| bookingTime | dateTime |  | No |

### Bid Object  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| userId | string |  | No |
| propertyId | string |  | No |
| value | double |  | No |
| createdDate | dateTime |  | No |

### Property Object

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | string |  | No |
| name | string |  | No |
| creator | string |  | No |
| propertyType | string |  | No |
| areaCode | string |  | No |
| bedroomCount | integer |  | No |
| price | double |  | No |
| biddingExpiry | dateTime |  | No |