<?php

class DbConnector {

var $theQuery;
var $link;

function DbConnector(){

        // Get the main settings from the array we just loaded
        $host = 'sql43.topnetpro.com';
        $db = 'tap357297_db';
        $user = 'tap357297';
        $pass = 'GtxVbx95m25GaRNC';

        // Connect to the database
        $this->link = mysql_connect($host, $user, $pass);
        mysql_select_db($db);
        register_shutdown_function(array(&$this, 'close'));
        echo'ok';

    }
	
  //*** Function: query, Purpose: Execute a database query ***
    function query($query) {

        $this->theQuery = $query;
        return mysql_query($query, $this->link);

    }

    //*** Function: fetchArray, Purpose: Get array of query results ***
    function fetchArray($result) {

        return mysql_fetch_array($result);

    }

    //*** Function: close, Purpose: Close the connection ***
    function close() {

        mysql_close($this->link);

    }
	
}

?>