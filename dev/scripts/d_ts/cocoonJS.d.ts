// Type definitions for CocoonJS


interface ICocoonKeyboardType
{
    TEXT;
    NUMBER;
    PHONE;
    EMAIL;
    URL;
}

interface ICocoonApp
{
    reload(): void;
}

interface ICocoonDeviceInfo
{
    os: string;
    version: string;
    dpi: string;
    brand: string;
    model: string;
    imei: string;
    platformId: string;
    odin: string;
    openudid: string;
}

interface ICocoonDialog 
{
    prompt(params: any, callbacks: any): void;
    keyboardType: ICocoonKeyboardType;
}

interface ICocoonDevice
{
    getDeviceInfo(): ICocoonDeviceInfo;
}

interface CocoonStatic 
{
    App: ICocoonApp;
    Device: ICocoonDevice;
    Dialog: ICocoonDialog;
    
    nativeAvailable: boolean; 
}

declare var Cocoon: CocoonStatic;