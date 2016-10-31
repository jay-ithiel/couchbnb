## Component Hierarchy

**SplashContainer**
  - Header
    * LoginForm (modal)
  -  Body
    * SignUpForm (modal)

**ReviewContainer**
  - ReviewForm (modal)

**HomeContainer**
  - LoggedInHeader
    * UserDetail
    * SearchBar (by date/location/guests)
    * NewSpotFrom
  - Body
    * SpotIndex (image links to spot show)

**SearchContainer**
  - LoggedInHeader
  - SpotFilter
    * GoogleMap
    * SpotIndex

**SpotContainer**
  * LoggedInHeader
  * SpotDetail
  * BookingForm

**MessagesContainer**
  - MessageForm
  - MessageIndex
    + MessageIndexItem
      * MessageDetail

**UserContainer**
  - LoggedInHeader
  - UserDetail

## Routes

|Path   | Component   |
|-------|-------------|
| "/" | "SplashContainer" |
| "/login" | "LoginForm" |
| "/sign-up" | "SignUpForm" |
| "/home" | "HomeContainer" |
| "/search" | "SearchContainer" |
| "/spot/:spotId" | "SpotContainer" |
| "/messages" | "MessagesContainer" |
| "/messages/:messageId" | "MessageIndexItem" |
| "/users/:userId" | "UserContainer" |
