---
link: 
  - "[[1743802452-programming|Programming]]"
  - "[[1754522252-postgresql|PostgreSQL]]"
aliases:
  - PostgreSQL Data Types Reference
tags:
  - Knowledge
  - PostgreSQL
created_date: 2025-09-18
---
# PostgreSQL Data Types Reference

## Numeric Types

### Integer Types
- `SMALLINT` - 2 bytes, range: -32768 to +32767
- `INTEGER` or `INT` - 4 bytes, range: -2147483648 to +2147483647
- `BIGINT` - 8 bytes, range: -9223372036854775808 to +9223372036854775807
- `SMALLSERIAL` - 2 bytes, auto-incrementing (1 to 32767)
- `SERIAL` - 4 bytes, auto-incrementing (1 to 2147483647)
- `BIGSERIAL` - 8 bytes, auto-incrementing (1 to 9223372036854775807)

### Exact Numeric Types
- `NUMERIC(precision, scale)` or `DECIMAL(precision, scale)` - variable precision, exact
- `NUMERIC` - arbitrary precision, exact

### Floating-Point Types
- `REAL` - 4 bytes, 6 decimal digits precision
- `DOUBLE PRECISION` - 8 bytes, 15 decimal digits precision

### Monetary Type
- `MONEY` - 8 bytes, currency amount

## Character Types

- `CHARACTER(n)` or `CHAR(n)` - fixed-length, blank-padded
- `CHARACTER VARYING(n)` or `VARCHAR(n)` - variable-length with limit
- `VARCHAR` or `TEXT` - variable unlimited length
- `TEXT` - variable unlimited length (preferred for long text)

## Binary Data Types

- `BYTEA` - variable-length binary string

## Date/Time Types

- `DATE` - 4 bytes, date only (4713 BC to 5874897 AD)
- `TIME [WITHOUT TIME ZONE]` - 8 bytes, time of day only
- `TIME WITH TIME ZONE` - 12 bytes, time of day with time zone
- `TIMESTAMP [WITHOUT TIME ZONE]` - 8 bytes, both date and time
- `TIMESTAMP WITH TIME ZONE` or `TIMESTAMPTZ` - 8 bytes, date and time with time zone
- `INTERVAL` - 16 bytes, time interval

## Boolean Type

- `BOOLEAN` or `BOOL` - 1 byte, true/false

## Enumerated Types

- `ENUM` - user-defined enumerated type (created with CREATE TYPE)

## Geometric Types

- `POINT` - 16 bytes, point on a plane (x,y)
- `LINE` - 32 bytes, infinite line (Ax+By+C=0)
- `LSEG` - 32 bytes, finite line segment (x1,y1),(x2,y2)
- `BOX` - 32 bytes, rectangular box (x1,y1),(x2,y2)
- `PATH` - 16+16n bytes, closed path (polygon)
- `PATH` - 16+16n bytes, open path
- `POLYGON` - 40+16n bytes, polygon (similar to closed path)
- `CIRCLE` - 24 bytes, circle (center point and radius)

## Network Address Types

- `CIDR` - 7 or 19 bytes, IPv4 or IPv6 network
- `INET` - 7 or 19 bytes, IPv4 or IPv6 host and network
- `MACADDR` - 6 bytes, MAC address
- `MACADDR8` - 8 bytes, MAC address (EUI-64 format)

## Bit String Types

- `BIT(n)` - fixed-length bit string
- `BIT VARYING(n)` or `VARBIT(n)` - variable-length bit string

## Text Search Types

- `TSVECTOR` - text search vector
- `TSQUERY` - text search query

## UUID Type

- `UUID` - 16 bytes, Universally Unique Identifier

## XML Type

- `XML` - XML data

## JSON Types

- `JSON` - textual JSON data
- `JSONB` - binary JSON data, decomposed

## Arrays

- `datatype[]` - variable-length array of any data type
- Example: `INTEGER[]`, `TEXT[]`, `TIMESTAMP[]`

## Composite Types

- User-defined composite types (created with CREATE TYPE)

## Range Types

- `INT4RANGE` - range of INTEGER
- `INT8RANGE` - range of BIGINT
- `NUMRANGE` - range of NUMERIC
- `TSRANGE` - range of TIMESTAMP WITHOUT TIME ZONE
- `TSTZRANGE` - range of TIMESTAMP WITH TIME ZONE
- `DATERANGE` - range of DATE

## Object Identifier Types

- `OID` - 4 bytes, object identifier
- `REGPROC` - function name
- `REGPROCEDURE` - function with argument types
- `REGOPER` - operator name
- `REGOPERATOR` - operator with argument types
- `REGCLASS` - relation name
- `REGTYPE` - data type name

## Pseudo-Types

- `ANY`
- `ANYELEMENT`
- `ANYARRAY`
- `ANYNONARRAY`
- `ANYENUM`
- `ANYRANGE`
- `CSTRING`
- `INTERNAL`
- `LANGUAGE_HANDLER`
- `FDW_HANDLER`
- `RECORD`
- `TRIGGER`
- `EVENT_TRIGGER`
- `PG_DDL_COMMAND`
- `VOID`
- `UNKNOWN`

## Domain Types

- User-defined domains (created with CREATE DOMAIN)

## Other Special Types

- `pg_lsn` - PostgreSQL Log Sequence Number
- `txid_snapshot` - transaction snapshot

## Large Object Type

- `OID` - used to reference large objects

## PostgreSQL-Specific Types

- `xid` - transaction ID
- `cid` - command ID
- `tid` - tuple ID (row identifier)
- `xid8` - full transaction ID (64-bit)

## User-Defined Types

- Created using `CREATE TYPE` statement

## Type Modifiers

Many types support modifiers like:
- `NUMERIC(10,2)` - precision and scale
- `VARCHAR(255)` - length limit
- `TIME(3)` - fractional seconds precision
- `TIMESTAMP(6)` - fractional seconds precision