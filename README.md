# OnePieceAPI
 A one piece amateur api for use my <a href="https://github.com/ErenMlg/OnePieceAndroid">OnePieceAndroid</a> project.

## Project Tech Stack
<ul>
 <li>This project developed with %100 with Node.JS/li>
 <li>Used MongoDB as database</li>
</ul>

## Api Structure
<table>
  <tr>
    <td>
      <table>
  <tr>
    <td colspan=2 align="center">Character</td>
  </tr>
  <tr>
    <td>Field Name</td>
    <td>Type</td>
  </tr>
  <tr>
    <td>_id</td>
    <td>ObjectID</td>
  </tr>
  <tr>
    <td>characterName</td>
    <td>ObjectID</td>
  </tr>
  <tr>
    <td>characterStatus</td>
    <td>String</td>
  </tr>
  <tr>
    <td>characterCrew</td>
    <td>ObjectID</td>
  </tr>
  <tr>
    <td>characterOrigin</td>
    <td>ObjectID</td>
  </tr>
  <tr>
    <td>characterOccupation</td>
    <td>ObjectID</td>
  </tr>
  <tr>
    <td>characterBounty</td>
    <td>Number</td>
  </tr>
  <tr>
    <td>characterDevilFruit</td>
    <td>ObjectID</td>
  </tr>
  <tr>
    <td>characterAbilities</td>
    <td>String</td>
  </tr>
  <tr>
    <td>characterPictureURL</td>
    <td>String</td>
  </tr>
</table>
    </td>
    
  <td>
      <table>
  <tr>
    <td colspan=2 align="center">Crew</td>
  </tr>
  <tr>
    <td>Field Name</td>
    <td>Type</td>
  </tr>
  <tr>
    <td>_id</td>
    <td>ObjectID</td>
  </tr>
  <tr>
    <td>crewName</td>
    <td>String</td>
  </tr>
  <tr>
    <td>crewTotalBounty</td>
    <td>Number</td>
  </tr>
  <tr>
    <td>crewMainShip</td>
    <td>String</td>
  </tr>
  <tr>
    <td>crewFlagURL</td>
    <td>String</td>
  </tr>
</table>
    </td>

  <td>
      <table>
  <tr>
    <td colspan=2 align="center">Devil Fruit</td>
  </tr>
  <tr>
    <td>Field Name</td>
    <td>Type</td>
  </tr>
  <tr>
    <td>_id</td>
    <td>ObjectID</td>
  </tr>
  <tr>
    <td>devilFruitName</td>
    <td>String</td>
  </tr>
  <tr>
    <td>devilFruitType</td>
    <td>String</td>
  </tr>
  <tr>
    <td>devilFruitPictureURL</td>
    <td>String</td>
  </tr>
</table>
    </td>
  </tr>
  <tr>
      <td>
      <table>
  <tr>
    <td colspan=2 align="center">Locations</td>
  </tr>
  <tr>
    <td>Field Name</td>
    <td>Type</td>
  </tr>
  <tr>
    <td>_id</td>
    <td>ObjectID</td>
  </tr>
  <tr>
    <td>locationName</td>
    <td>String</td>
  </tr>
  <tr>
    <td>locationPictureURL</td>
    <td>String</td>
  </tr>
</table>
    </td>
    <td>
      <table>
  <tr>
    <td colspan=2 align="center">Occupations</td>
  </tr>
  <tr>
    <td>Field Name</td>
    <td>Type</td>
  </tr>
  <tr>
    <td>_id</td>
    <td>ObjectID</td>
  </tr>
  <tr>
    <td>occupationName</td>
    <td>String</td>
  </tr>
  <tr>
    <td>occupationDescription</td>
    <td>String</td>
  </tr>
  <tr>
    <td>occupationPictureURL</td>
    <td>String</td>
  </tr>
</table>
    </td>
     <td>
      <table>
  <tr>
    <td colspan=2 align="center">SubLocation</td>
  </tr>
  <tr>
    <td>Field Name</td>
    <td>Type</td>
  </tr>
  <tr>
    <td>_id</td>
    <td>ObjectID</td>
  </tr>
  <tr>
    <td>subLocationName</td>
    <td>String</td>
  </tr>
  <tr>
    <td>subLocationPictureURL</td>
    <td>String</td>
  </tr>
  <tr>
    <td>firstAppearance</td>
    <td>String</td>
  </tr>
  <tr>
    <td>location</td>
    <td>ObjectID</td>
  </tr>
</table>
    </td>
  </tr>
</table>

## End Note
I may have mistakes, you can contact me for your feedback. 👉 📫 **eren.mollaoglu@outlook.com**<br>
