
interface DOMAssistantAJAX
{
    ajax: (options: Object) => any;   
}

interface DOMAssistantStatic 
{
    AJAX: DOMAssistantAJAX;
}

declare var DOMAssistant: DOMAssistantStatic;