
// A function that generates the html in the document

export const generateHtml = (array) => {
    return array.map(item => { 
         
        // Add the date to the past topics
        const discussedDate = item.discussedOn;
        function convert(timestamp) {
            var date = new Date(                  // Convert to date
              parseInt(                           // Convert to integer
                timestamp.split("(")[1]           // Take only the part right of the "("
              )
            );
            return [
              ("0" + date.getDate()).slice(-2),      // Get day and pad it with zeroes
              ("0" + (date.getMonth()+1)).slice(-2), // Get month and pad it with zeroes
              date.getFullYear()                     // Get full year
            ].join('/');                             // Glue the pieces together
          }
 
        return `
        <li class="list" data-id="${item.id}">
                    <div class="topic_container"> 
                        <p class="topic">${item.title}</p>
                       ${discussedDate == "" ?   
                       `
                       <button class="archive_button" type="button">
                            <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.5 7H9.5M2.75 4H13.25H2.75ZM2.75 4C2.35218 4 1.97064 3.84196 1.68934 3.56066C1.40804 3.27936 1.25 2.89782 1.25 2.5C1.25 2.10218 1.40804 1.72064 1.68934 1.43934C1.97064 1.15804 2.35218 1 2.75 1H13.25C13.6478 1 14.0294 1.15804 14.3107 1.43934C14.592 1.72064 14.75 2.10218 14.75 2.5C14.75 2.89782 14.592 3.27936 14.3107 3.56066C14.0294 3.84196 13.6478 4 13.25 4H2.75ZM2.75 4V11.5C2.75 11.8978 2.90804 12.2794 3.18934 12.5607C3.47064 12.842 3.85218 13 4.25 13H11.75C12.1478 13 12.5294 12.842 12.8107 12.5607C13.092 12.2794 13.25 11.8978 13.25 11.5V4H2.75Z" stroke="#D8779A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>`
                             : 
                        `<button data-id="${item.id}"  class="delete_button" type="button">
                             <svg class="delete_topic" width="17" height="19" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.5 5.125H15.5M14.625 5.125L13.8664 15.7493C13.8349 16.1908 13.6374 16.604 13.3135 16.9056C12.9896 17.2073 12.5634 17.375 12.1208 17.375H4.87925C4.43662 17.375 4.01043 17.2073 3.68652 16.9056C3.36262 16.604 3.16505 16.1908 3.13363 15.7493L2.375 5.125H14.625ZM6.75 8.625V13.875V8.625ZM10.25 8.625V13.875V8.625ZM11.125 5.125V2.5C11.125 2.26794 11.0328 2.04538 10.8687 1.88128C10.7046 1.71719 10.4821 1.625 10.25 1.625H6.75C6.51794 1.625 6.29538 1.71719 6.13128 1.88128C5.96719 2.04538 5.875 2.26794 5.875 2.5V5.125H11.125Z" stroke="#C4C4C4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>`}
                    </div>
                    ${discussedDate == "" ? `<div class="vote_buttons_container">
                        <button data-id="${item.id}" class="upvotes_button" type="button">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.11984 15.8583H3.46776C3.0296 15.8583 2.60938 15.6843 2.29956 15.3744C1.98973 15.0646 1.81567 14.6444 1.81567 14.2063V9.25C1.81567 8.81184 1.98973 8.39163 2.29956 8.0818C2.60938 7.77198 3.0296 7.59792 3.46776 7.59792H5.53286M10.9021 7.59792H14.8374C15.119 7.59793 15.3959 7.6699 15.6418 7.80701C15.8877 7.94411 16.0945 8.1418 16.2426 8.3813C16.3907 8.62081 16.475 8.89418 16.4877 9.17546C16.5004 9.45674 16.441 9.73661 16.3152 9.98848L13.424 15.7708C13.2868 16.0454 13.0758 16.2764 12.8146 16.4377C12.5534 16.5991 12.2524 16.6845 11.9454 16.6844H8.62721C8.49257 16.6844 8.35792 16.6679 8.22658 16.6348L5.11984 15.8583L10.9021 7.59792ZM10.9021 7.59792V3.46771C10.9021 3.02955 10.7281 2.60933 10.4182 2.29951C10.1084 1.98968 9.68821 1.81562 9.25005 1.81562H9.17157C8.75855 1.81562 8.42401 2.15017 8.42401 2.56319C8.42401 3.15299 8.24971 3.72956 7.92177 4.22023L5.11984 8.42396V15.8583L10.9021 7.59792ZM10.9021 7.59792H9.25005H10.9021Z" stroke="#00473E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <span> ${item.upvotes} </span>
                        </button>
                        <button data-id="${item.id}" class="downvotes_button" type="button">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.75 2H13.25C13.6478 2 14.0293 2.15804 14.3106 2.43934C14.5919 2.72064 14.75 3.10218 14.75 3.5V8C14.75 8.39782 14.5919 8.77936 14.3106 9.06066C14.0293 9.34196 13.6478 9.5 13.25 9.5H11.375M6.49995 9.5H2.92695C2.6713 9.49999 2.41989 9.43464 2.1966 9.31016C1.97331 9.18567 1.78553 9.00618 1.65111 8.78873C1.51668 8.57127 1.44006 8.32307 1.42853 8.06768C1.417 7.81229 1.47093 7.55819 1.5852 7.3295L4.2102 2.0795C4.33474 1.83026 4.52624 1.62064 4.76323 1.47413C5.00022 1.32762 5.27333 1.25001 5.55195 1.25H8.56545C8.68808 1.25007 8.81025 1.26519 8.9292 1.295L11.7492 2L6.49995 9.5ZM6.4992 9.5V13.25C6.4992 13.6478 6.65724 14.0294 6.93854 14.3107C7.21985 14.592 7.60138 14.75 7.9992 14.75H8.0712C8.4462 14.75 8.74995 14.4463 8.74995 14.072C8.74995 13.5358 8.9082 13.0122 9.20595 12.566L11.75 8.75V2L6.4992 9.5ZM6.49995 9.5H7.99995H6.49995Z" stroke="#00473E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg> 
                            <span>${item.downvotes}</span>
                        </button>
                    </div>`: ""}
                    ${discussedDate !== "" ? `</span>Discussed on ${convert(`/Date(${item.discussedOn})/`)} </span>`: ""}
                </li>
        `
    }).join("")
}

