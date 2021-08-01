import { useState, useEffect } from 'react'
import axios from 'axios'
import Alert from "sweetalert2";

import FullCalendar from '@fullcalendar/react'

import resourceTimelinePlugin from '@fullcalendar/resource-timeline'
import interactionPlugin from "@fullcalendar/interaction"
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import frLocale from '@fullcalendar/core/locales/fr';



export default function EmploisAdmin() {

    const [events, setEvents] = useState()
    const [resources, setResources] = useState()
    

    useEffect(() => {
        axios.get("http://localhost:3001/admin/emplois").then((res) => {
            setEvents(res.data.events)
            setResources(res.data.resources)
        })
    }, [])

    function eventClick(eventClick) {
      
        Alert.fire({
            title: "Informations",
            html:
                `<div class="table-responsive">
          <table class="table">
          <tbody>
          <tr >
          <td>Séance</td>
          <td><strong>` +
                eventClick.event.title +
                `</strong></td>
          </tr>
          <tr >
          <td>Début</td>
          <td><strong>
          ` +
                eventClick.event.startStr +
                `</strong></td>
                </tr>
                <tr >
                <td>Fin</td>
                <td><strong>
                `+ eventClick.event.endStr+  
                `</strong></td>
                </tr>
                <tr >
                <td>Client</td>
                <td><strong>
                ` +
                eventClick.event._def.extendedProps.eventContent +
                      
                      `
          </strong></td>
          </tr>
          </tbody>
          </table>
          </div>`,

            confirmButtonColor: "#d33",
         
            confirmButtonText: "Fermer",
            
        })
        
        

    };
  
    return (


        <FullCalendar

            schedulerLicenseKey={'GPL-My-Project-Is-Open-Source'}

            initialView='resourceTimelineDay'
            plugins={[resourceTimelinePlugin,timeGridPlugin, interactionPlugin, listPlugin]}
            
         
            slotMinTime='08:00'
            slotMaxTime='20:00'
            locale='fr'
            locales={[frLocale]}
            slotDuration='00:10:00'
            eventOverlap={false}
            slotEventOverlap={false}
             eventClick={eventClick}
            dayMaxEvents={true}
            views={{
                resourceTimelineDay: {
                    titleFormat: {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        weekday: 'long',
                    },
                },
            }}
            height={"auto"}

            resourceAreaHeaderContent={'Employés'}
            resourceAreaWidth={'30%'}

            resources={resources}
            resourceRender={ResourceContent}

            events={events}
            eventContent={EventContent}
            resourceLabelDidMount={ResourceContent}



        />


    )
}
function ResourceContent(resource) {

    
    let icon = document.createElement('img');
    let url = resource.resource._resource.extendedProps.url;
   
    icon.src = `./uploads/profile/employes/${url}`;
    icon.height = "60"
    icon.width = "50"
    icon.style.borderRadius="50%"
    icon.style.marginRight="10px"
    


    resource.el.querySelector('.fc-datagrid-cell-main')
        .insertBefore(icon, resource.el.querySelector('.fc-datagrid-cell-main').firstChild);



}

function EventContent(eventInfo) {

    return (
        <>
            <b>{`${eventInfo.event.start.getHours()}:${eventInfo.event.start.getMinutes()} - ${eventInfo.event.end.getHours()}:${eventInfo.event.end.getMinutes()}`}</b>
            <br />
            <i>{eventInfo.event.title}</i>
            <br />
            <strong>{eventInfo.event._def.extendedProps.eventContent}</strong>
        </>
    )

}


