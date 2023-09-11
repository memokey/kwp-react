# Product Description
The KWP Website serves as an official online presence for KWP Property Management, offering tailored user portals for existing clients (owners and tenants) to manage properties, prospective tenants to explore listings, and potential owners to connect with sales contacts.

This site mainly serves three types of user or audience.
click [here](https://gridchef.atlassian.net/wiki/spaces/KWP/overview) for more information 

## Arhitecture
```mermaid
C4Context
        Person(KWPU, "KWP Back Office Users", "Leasing Agents, Maintenace, Accounts, etc..")
        Person(Tenant, "Tenant")
        Person_Ext(Owner, "OWNER", "")
        Person(pClient, "Prospect Tenant/Owner", "")
        
        Enterprise_Boundary(b1, "KWP - Azure Subscription") {

          Boundary(KWPSite, "KWP Website") {
            SystemQueue(TenantP, "Tenant Portal", "more information..")
            SystemQueue(OwnerP, "Owner Portal", "more information....")
            System_Ext(marketing, "Marketing Material", "more information....")
            System_Ext(appointment, "Calander", "Booking appointments for showings..")
          }

           System_Ext(KWPAPI, "KWP API")
        }

        System_Boundary(b2, "Buildium") {
            System(bSystem, "Buildium Portal")
            System(bAPI, "Buildium API", " Secure Access")
          }

  
      Rel(Tenant, TenantP, "Secure Login")
      Rel(OwnerP, KWPAPI, "")
      Rel(TenantP, KWPAPI, "")
      Rel( KWPAPI,bAPI, "oAuth 2.0")
      Rel(Owner, OwnerP, "Secure Login")
      Rel(pClient, marketing, "SSL")
      Rel(pClient, appointment, "SSL")
      Rel(KWPU, bSystem, "2FA")
    
      UpdateElementStyle(KWPU, $fontColor="white", $bgColor="grey", $borderColor="blue")
      UpdateElementStyle(Owner, $fontColor="white", $bgColor="grey", $borderColor="blue")
      UpdateElementStyle(Tenant, $fontColor="white", $bgColor="grey", $borderColor="blue")
      UpdateElementStyle(pClient, $fontColor="white", $bgColor="grey", $borderColor="blue")
      
      UpdateElementStyle(marketing, $fontColor="white", $bgColor="green", $borderColor="blue")
      UpdateElementStyle(appointment, $fontColor="white", $bgColor="green", $borderColor="blue")
      UpdateElementStyle(KWPAPI, $fontColor="white", $bgColor="brown", $borderColor="blue")
      UpdateElementStyle(bAPI, $fontColor="white", $bgColor="brown", $borderColor="blue")

      UpdateRelStyle(KWPU, bSystem, $textColor="blue", $lineColor="blue", $offsetX="5")
      UpdateRelStyle(Tenant, TenantP, $textColor="blue", $lineColor="blue", $offsetX="5")
      UpdateRelStyle(Owner, OwnerP, $textColor="Blue", $lineColor="Blue", $offsetX="5")
      UpdateRelStyle(pClient, marketing, $textColor="green", $lineColor="green", $offsetX="5")
      UpdateRelStyle(pClient, appointment, $textColor="green", $lineColor="green", $offsetX="60")
      UpdateRelStyle(KWPAPI, bAPI, $textColor="brown", $lineColor="brown", $offsetX="-90")
      

      UpdateLayoutConfig($c4ShapeInRow="4", $c4BoundaryInRow="2")

```