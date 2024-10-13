import type {
  OpenAPIClient,
  Parameters,
  UnknownParamsObject,
  OperationResponse,
  AxiosRequestConfig,
} from 'openapi-client-axios'; 

declare namespace Components {
    namespace Schemas {
        export interface T1 {
            CustomName: string;
            DT: number;
            ErrorCode: number;
            PVPower: number;
            Show: number;
            StatusCode: number;
            InverterState: string;
            UniqueID: string;
        }
        export interface T1Powerflow {
            Battery_Mode: string;
            DT: number;
            E_Day: number;
            E_Year: number;
            E_Total: number;
            P: number;
            SOC: number;
        }
        export interface T3PInverterData {
            IAC_L1: TIACL1;
            IAC_L2: TIACL2;
            IAC_L3: TIACL3;
            T_AMBIENT: TTAMBIENT;
            UAC_L1: TUACL1;
            UAC_L2: TUACL2;
            UAC_L3: TUACL3;
        }
        export interface TActiveDeviceInfo1 {
            DT: number;
            Serial: string;
        }
        export interface TActiveDeviceInfoFullStruct {
            Body: {
                Data: TData;
            };
            Head: {
                Status: {
                    Code: number;
                    Reason?: string;
                    UserMessage?: string;
                };
                TimeStamp: string;
            };
        }
        export interface TActiveDeviceInfoInverter {
            "1": TActiveDeviceInfo1;
        }
        export interface TActiveDeviceInfoMeter {
            [name: string]: TMeterMeterEntry;
        }
        export interface TActiveDeviceInfoOhmpilot {
            [name: string]: TOhmpilotOhmpilotEntry;
        }
        export interface TActiveDeviceInfoStorage {
            [name: string]: TStorageStorageEntry;
        }
        export interface TCCS {
            Details: TDetails;
            Current_AC_Phase_1: number;
            Current_AC_Phase_2: number;
            Current_AC_Phase_3: number;
            Current_AC_Sum: number;
            Enable: number;
            EnergyReal_WAC_Minus_Absolute: number;
            EnergyReal_WAC_Phase_1_Consumed: number;
            EnergyReal_WAC_Phase_1_Produced: number;
            EnergyReal_WAC_Phase_2_Consumed: number;
            EnergyReal_WAC_Phase_2_Produced: number;
            EnergyReal_WAC_Phase_3_Consumed: number;
            EnergyReal_WAC_Phase_3_Produced: number;
            EnergyReal_WAC_Plus_Absolute: number;
            EnergyReal_WAC_Sum_Consumed: number;
            EnergyReal_WAC_Sum_Produced: number;
            Frequency_Phase_Average: number;
            Meter_Location_Current: number;
            PowerApparent_S_Phase_1: number;
            PowerApparent_S_Phase_2: number;
            PowerApparent_S_Phase_3: number;
            PowerApparent_S_Sum: number;
            PowerFactor_Phase_1: number;
            PowerFactor_Phase_2: number;
            PowerFactor_Phase_3: number;
            PowerFactor_Sum: number;
            PowerReactive_Q_Phase_1: number;
            PowerReactive_Q_Phase_2: number;
            PowerReactive_Q_Phase_3: number;
            PowerReactive_Q_Sum: number;
            PowerReal_P_Phase_1: number;
            PowerReal_P_Phase_2: number;
            PowerReal_P_Phase_3: number;
            PowerReal_P_Sum: number;
            Timestamp: number;
            Visible: number;
            Voltage_AC_PhaseToPhase_12: number;
            Voltage_AC_PhaseToPhase_23: number;
            Voltage_AC_PhaseToPhase_31: number;
            Voltage_AC_Phase_1: number;
            Voltage_AC_Phase_2: number;
            Voltage_AC_Phase_3: number;
            Voltage_AC_Phase_Average: number;
        }
        export interface TCommonInverterData {
            DAY_ENERGY: TDAYENERGY;
            DeviceStatus: TDeviceStatus;
            FAC: TFAC;
            IAC: TIAC;
            IDC: TIDC;
            IDC_2: TIDC2;
            IDC_3: TIDC3;
            PAC: TPAC;
            SAC: TSAC;
            TOTAL_ENERGY: TTOTALENERGY;
            UAC: TUAC;
            UDC: TUDC;
            UDC_2: TUDC2;
            UDC_3: TUDC3;
            YEAR_ENERGY: TYEARENERGY;
        }
        export interface TCommonInverterDataNotRunning {
            DAY_ENERGY: TDAYENERGY;
            DeviceStatus: TDeviceStatus;
            IAC: TIAC;
            IDC: TIDC;
            IDC_2: TIDC2;
            IDC_3: TIDC3;
            PAC: TPAC;
            SAC: TSAC;
            TOTAL_ENERGY: TTOTALENERGY;
            UAC: TUAC;
            UDC: TUDC;
            UDC_2: TUDC2;
            UDC_3: TUDC3;
            YEAR_ENERGY: TYEARENERGY;
        }
        export interface TController {
            Details: TControllerDetails;
            Capacity_Maximum: number;
            Current_DC: number;
            DesignedCapacity: number;
            Enable: number;
            StateOfCharge_Relative: number;
            Status_BatteryCell: number;
            Temperature_Cell: number;
            TimeStamp: number;
            Voltage_DC: number;
        }
        export interface TControllerDetails {
            Manufacturer: string;
            Serial: string;
            Model: string;
        }
        export interface TCumulationInverterData {
            DAY_ENERGY: TDAYENERGY;
            DeviceStatus: TDeviceStatus;
            PAC: TPAC;
            TOTAL_ENERGY: TTOTALENERGY;
            YEAR_ENERGY: TYEARENERGY;
        }
        export interface TDAYENERGY {
            Unit: string;
            Value: number;
        }
        export interface TData {
            Inverter: TActiveDeviceInfoInverter;
            Meter: TActiveDeviceInfoMeter;
            Storage: TActiveDeviceInfoStorage;
            Ohmpilot: TActiveDeviceInfoOhmpilot;
        }
        export interface TDetails {
            Manufacturer: string;
            Serial: string;
            Model: string;
        }
        export interface TDetailsOhmpilot {
            Manufacturer: string;
            Serial: string;
            Model: string;
            Hardware: string;
            Software: string;
        }
        export interface TDeviceStatus {
            ErrorCode: number;
            InverterState: string;
            StatusCode: number;
        }
        export interface TFAC {
            Unit: string;
            Value: number;
        }
        export interface TGavacci1Phase {
            Details: TDetails;
            Current_AC_Phase_1: number;
            Current_AC_Sum: number;
            Enable: number;
            EnergyReactive_VArAC_Sum_Consumed: number;
            EnergyReactive_VArAC_Sum_Produced: number;
            EnergyReal_WAC_Minus_Absolute: number;
            EnergyReal_WAC_Plus_Absolute: number;
            EnergyReal_WAC_Sum_Consumed: number;
            EnergyReal_WAC_Sum_Produced: number;
            Frequency_Phase_Average: number;
            Meter_Location_Current: number;
            PowerApparent_S_Phase_1: number;
            PowerApparent_S_Sum: number;
            PowerFactor_Phase_1: number;
            PowerFactor_Sum: number;
            PowerReactive_Q_Phase_1: number;
            PowerReactive_Q_Sum: number;
            PowerReal_P_Phase_1: number;
            PowerReal_P_Phase_2: number;
            PowerReal_P_Phase_3: number;
            PowerReal_P_Sum: number;
            Timestamp: number;
            Visible: number;
            Voltage_AC_Phase_1: number;
        }
        export interface TGavacci3Phase {
            Details: TDetails;
            Current_AC_Phase_1: number;
            Current_AC_Phase_2: number;
            Current_AC_Phase_3: number;
            Current_AC_Sum: number;
            Enable: number;
            EnergyReactive_VArAC_Sum_Consumed: number;
            EnergyReactive_VArAC_Sum_Produced: number;
            EnergyReal_WAC_Minus_Absolute: number;
            EnergyReal_WAC_Plus_Absolute: number;
            EnergyReal_WAC_Sum_Consumed: number;
            EnergyReal_WAC_Sum_Produced: number;
            Frequency_Phase_Average: number;
            Meter_Location_Current: number;
            PowerApparent_S_Phase_1: number;
            PowerApparent_S_Phase_2: number;
            PowerApparent_S_Phase_3: number;
            PowerApparent_S_Sum: number;
            PowerFactor_Phase_1: number;
            PowerFactor_Phase_2: number;
            PowerFactor_Phase_3: number;
            PowerFactor_Sum: number;
            PowerReactive_Q_Phase_1: number;
            PowerReactive_Q_Phase_2: number;
            PowerReactive_Q_Phase_3: number;
            PowerReactive_Q_Sum: number;
            PowerReal_P_Phase_1: number;
            PowerReal_P_Phase_2: number;
            PowerReal_P_Phase_3: number;
            PowerReal_P_Sum: number;
            Timestamp: number;
            Visible: number;
            Voltage_AC_PhaseToPhase_12: number;
            Voltage_AC_PhaseToPhase_23: number;
            Voltage_AC_PhaseToPhase_31: number;
            Voltage_AC_Phase_1: number;
            Voltage_AC_Phase_2: number;
            Voltage_AC_Phase_3: number;
        }
        export interface TGeneric {
            Details: TDetails;
            Current_AC_Phase_1: number;
            Current_AC_Phase_2: number;
            Current_AC_Phase_3: number;
            Current_AC_Sum: number;
            Enable: number;
            EnergyReactive_VArAC_Phase_1_Consumed: number;
            EnergyReactive_VArAC_Phase_1_Produced: number;
            EnergyReactive_VArAC_Sum_Consumed: number;
            EnergyReactive_VArAC_Sum_Produced: number;
            EnergyReal_WAC_Minus_Absolute: number;
            EnergyReal_WAC_Phase_1_Consumed: number;
            EnergyReal_WAC_Phase_1_Produced: number;
            EnergyReal_WAC_Phase_2_Consumed: number;
            EnergyReal_WAC_Phase_2_Produced: number;
            EnergyReal_WAC_Phase_3_Consumed: number;
            EnergyReal_WAC_Phase_3_Produced: number;
            EnergyReal_WAC_Plus_Absolute: number;
            EnergyReal_WAC_Sum_Consumed: number;
            EnergyReal_WAC_Sum_Produced: number;
            Frequency_Phase_Average: number;
            Meter_Location_Current: number;
            PowerApparent_S_Phase_1: number;
            PowerApparent_S_Phase_2: number;
            PowerApparent_S_Phase_3: number;
            PowerApparent_S_Sum: number;
            PowerFactor_Phase_1: number;
            PowerFactor_Phase_2: number;
            PowerFactor_Phase_3: number;
            PowerFactor_Sum: number;
            PowerReactive_Q_Phase_1: number;
            PowerReactive_Q_Phase_2: number;
            PowerReactive_Q_Phase_3: number;
            PowerReactive_Q_Sum: number;
            PowerReal_P_Phase_1: number;
            PowerReal_P_Phase_2: number;
            PowerReal_P_Phase_3: number;
            PowerReal_P_Sum: number;
            Timestamp: number;
            Visible: number;
            Voltage_AC_PhaseToPhase_12: number;
            Voltage_AC_PhaseToPhase_23: number;
            Voltage_AC_PhaseToPhase_31: number;
            Voltage_AC_Phase_1: number;
            Voltage_AC_Phase_2: number;
            Voltage_AC_Phase_3: number;
            Voltage_AC_Phase_Average: number;
        }
        export interface TIAC {
            Unit: string;
            Value: number;
        }
        export interface TIACL1 {
            Unit: string;
            Value: number;
        }
        export interface TIACL2 {
            Unit: string;
            Value: number;
        }
        export interface TIACL3 {
            Unit: string;
            Value: number;
        }
        export interface TIDC {
            Unit: string;
            Value: number;
        }
        export interface TIDC2 {
            Unit: string;
            Value: number;
        }
        export interface TIDC3 {
            Unit: string;
            Value: number;
        }
        export interface TIME1Phase {
            Details: TDetails;
            Current_AC_Phase_1: number;
            Current_AC_Sum: number;
            Enable: number;
            EnergyReactive_VArAC_Phase_1_Consumed: number;
            EnergyReactive_VArAC_Phase_1_Produced: number;
            EnergyReactive_VArAC_Sum_Consumed: number;
            EnergyReactive_VArAC_Sum_Produced: number;
            EnergyReal_WAC_Minus_Absolute: number;
            EnergyReal_WAC_Phase_1_Consumed: number;
            EnergyReal_WAC_Phase_1_Produced: number;
            EnergyReal_WAC_Plus_Absolute: number;
            EnergyReal_WAC_Sum_Consumed: number;
            EnergyReal_WAC_Sum_Produced: number;
            Frequency_Phase_Average: number;
            Meter_Location_Current: number;
            PowerApparent_S_Phase_1: number;
            PowerApparent_S_Sum: number;
            PowerFactor_Phase_1: number;
            PowerFactor_Sum: number;
            PowerReactive_Q_Phase_1: number;
            PowerReactive_Q_Sum: number;
            PowerReal_P_Phase_1: number;
            PowerReal_P_Sum: number;
            Timestamp: number;
            Visible: number;
            Voltage_AC_Phase_1: number;
        }
        export interface TIME3Phase {
            Details: TDetails;
            Current_AC_Phase_1: number;
            Current_AC_Phase_2: number;
            Current_AC_Phase_3: number;
            Enable: number;
            EnergyReactive_VArAC_Phase_1_Consumed: number;
            EnergyReactive_VArAC_Phase_1_Produced: number;
            EnergyReactive_VArAC_Sum_Consumed: number;
            EnergyReactive_VArAC_Sum_Produced: number;
            EnergyReal_WAC_Minus_Absolute: number;
            EnergyReal_WAC_Plus_Absolute: number;
            EnergyReal_WAC_Sum_Consumed: number;
            EnergyReal_WAC_Sum_Produced: number;
            Frequency_Phase_Average: number;
            Meter_Location_Current: number;
            PowerApparent_S_Phase_1: number;
            PowerApparent_S_Phase_2: number;
            PowerApparent_S_Phase_3: number;
            PowerApparent_S_Sum: number;
            PowerFactor_Phase_1: number;
            PowerFactor_Phase_2: number;
            PowerFactor_Phase_3: number;
            PowerFactor_Sum: number;
            PowerReactive_Q_Phase_1: number;
            PowerReactive_Q_Phase_2: number;
            PowerReactive_Q_Phase_3: number;
            PowerReactive_Q_Sum: number;
            PowerReal_P_Phase_1: number;
            PowerReal_P_Phase_2: number;
            PowerReal_P_Phase_3: number;
            PowerReal_P_Sum: number;
            Timestamp: number;
            Visible: number;
            Voltage_AC_PhaseToPhase_12: number;
            Voltage_AC_PhaseToPhase_23: number;
            Voltage_AC_PhaseToPhase_31: number;
            Voltage_AC_Phase_1: number;
            Voltage_AC_Phase_2: number;
            Voltage_AC_Phase_3: number;
        }
        export interface TInverterDataFullStruct {
            Body: {
                Data: TInverterDataSelector;
            };
            Head: {
                RequestArguments?: {
                    Datacollection?: string;
                };
                Status: {
                    Code: number;
                    Reason?: string;
                    UserMessage?: string;
                };
                TimeStamp: string;
            };
        }
        export type TInverterDataSelector = T3PInverterData | TCommonInverterData | TCommonInverterDataNotRunning | TCumulationInverterData;
        export interface TInverterInfo {
            "1": T1;
        }
        export interface TInverterInfoFullStruct {
            Body: {
                Data: TInverterInfo;
            };
            Head: {
                Status: {
                    Code: number;
                    Reason?: string;
                    UserMessage?: string;
                };
                TimeStamp: string;
            };
        }
        export interface TInverters {
            "1": T1Powerflow;
            Site: TSite;
            Version: string;
        }
        export interface TMeter {
            Details: TDetails;
        }
        export interface TMeterMeterEntry {
            DT: number;
            Serial: string;
        }
        export interface TMeterRealtimeData {
            [name: string]: TMeterSelector;
        }
        export interface TMeterRealtimeDataFullStruct {
            Body: {
                Data: TMeterRealtimeData;
            };
            Head: {
                RequestArguments?: {
                    Scope?: string;
                    DeviceId?: string;
                };
                Status: {
                    Code: number;
                    Reason?: string;
                    UserMessage?: string;
                };
                TimeStamp: string;
            };
        }
        export type TMeterSelector = TIME1Phase | TIME3Phase | TCCS | TGavacci1Phase | TGavacci3Phase | TGeneric;
        export interface TOhmpilot {
            Details: TDetailsOhmpilot;
            CodeOfState: number;
            EnergyReal_WAC_Sum_Consumed: number;
            PowerReal_PAC_Sum: number;
            Temperature_Channel_1: number;
            EnergyReactive_VArAC_Phase_1_Produced: number;
        }
        export interface TOhmpilotOhmpilotEntry {
            DT: number;
            Serial: string;
        }
        export interface TOhmpilotRealtimeData {
            [name: string]: TOhmpilot;
        }
        export interface TOhmpilotRealtimeDataFullStruct {
            Body: {
                Data: TOhmpilotRealtimeData;
            };
            Head: {
                RequestArguments?: {
                    Scope?: string;
                    DeviceId?: string;
                };
                Status: {
                    Code: number;
                    Reason?: string;
                    UserMessage?: string;
                };
                TimeStamp: string;
            };
        }
        export interface TPAC {
            Unit: string;
            Value: number;
        }
        export interface TPowerFlowRealtimeData {
            inverters: TInverters;
        }
        export interface TPowerflowRealtimeDataFullStruct {
            Body: {
                Data: TPowerFlowRealtimeData;
            };
            Head: {
                Status: {
                    Code: number;
                    Reason?: string;
                    UserMessage?: string;
                };
                TimeStamp: string;
            };
        }
        export interface TSAC {
            Unit: string;
            Value: number;
        }
        export interface TSite {
            BackupMode: number;
            BatteryStandby: string;
            E_Day: number;
            E_Year: number;
            E_Total: number;
            Meter_Location: string;
            Mode: string;
            P_Akku: number;
            P_Grid: number;
            P_Load: number;
            P_PV: number;
            rel_Autonomy: number;
            rel_SelfConsumption: number;
        }
        export interface TStorage {
            Controller: TController;
            Modules: any[];
        }
        export interface TStorageRealtimeData {
            [name: string]: TStorage;
        }
        export interface TStorageRealtimeDataFullStruct {
            Body: {
                Data: TStorageRealtimeData;
            };
            Head: {
                RequestArguments?: {
                    Scope?: string;
                    DeviceId?: string;
                };
                Status: {
                    Code: number;
                    Reason?: string;
                    UserMessage?: string;
                };
                TimeStamp: string;
            };
        }
        export interface TStorageStorageEntry {
            DT: number;
            Serial: string;
        }
        export interface TTAMBIENT {
            Unit: string;
            Value: number;
        }
        export interface TTOTALENERGY {
            Unit: string;
            Value: number;
        }
        export interface TUAC {
            Unit: string;
            Value: number;
        }
        export interface TUACL1 {
            Unit: string;
            Value: number;
        }
        export interface TUACL2 {
            Unit: string;
            Value: number;
        }
        export interface TUACL3 {
            Unit: string;
            Value: number;
        }
        export interface TUDC {
            Unit: string;
            Value: number;
        }
        export interface TUDC2 {
            Unit: string;
            Value: number;
        }
        export interface TUDC3 {
            Unit: string;
            Value: number;
        }
        export interface TYEARENERGY {
            Unit: string;
            Value: number;
        }
    }
}
declare namespace Paths {
    namespace GetActiveDeviceInfo {
        namespace Responses {
            export type $200 = Components.Schemas.TActiveDeviceInfoFullStruct;
        }
    }
    namespace GetInverterInfo {
        namespace Responses {
            export type $200 = Components.Schemas.TInverterInfoFullStruct;
        }
    }
    namespace GetInverterRealtimeData {
        namespace Parameters {
            export type Datacollection = "CommonInverterData" | "3PInverterData" | "CumulationInverterData";
        }
        export interface QueryParameters {
            Datacollection: Parameters.Datacollection;
        }
        namespace Responses {
            export type $200 = Components.Schemas.TInverterDataFullStruct;
        }
    }
    namespace GetMeterRealtimeData {
        namespace Parameters {
            export type DeviceId = number;
            export type Scope = "Device" | "System";
        }
        export interface QueryParameters {
            Scope?: Parameters.Scope;
            DeviceId?: Parameters.DeviceId;
        }
        namespace Responses {
            export type $200 = Components.Schemas.TMeterRealtimeDataFullStruct;
        }
    }
    namespace GetOhmpilotRealtimeData {
        namespace Parameters {
            export type DeviceId = number;
            export type Scope = "Device" | "System";
        }
        export interface QueryParameters {
            Scope?: Parameters.Scope;
            DeviceId?: Parameters.DeviceId;
        }
        namespace Responses {
            export type $200 = Components.Schemas.TOhmpilotRealtimeDataFullStruct;
        }
    }
    namespace GetPowerFlowRealtimeData {
        namespace Responses {
            export type $200 = Components.Schemas.TPowerflowRealtimeDataFullStruct;
        }
    }
    namespace GetStorageRealtimeData {
        namespace Parameters {
            export type DeviceId = number;
            export type Scope = "Device" | "System";
        }
        export interface QueryParameters {
            Scope?: Parameters.Scope;
            DeviceId?: Parameters.DeviceId;
        }
        namespace Responses {
            export type $200 = Components.Schemas.TStorageRealtimeDataFullStruct;
        }
    }
}

export interface OperationMethods {
  /**
   * GetInverterRealtimeData
   */
  'GetInverterRealtimeData'(
    parameters?: Parameters<Paths.GetInverterRealtimeData.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetInverterRealtimeData.Responses.$200>
  /**
   * GetInverterInfo
   */
  'GetInverterInfo'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetInverterInfo.Responses.$200>
  /**
   * GetPowerFlowRealtimeData
   */
  'GetPowerFlowRealtimeData'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetPowerFlowRealtimeData.Responses.$200>
  /**
   * GetActiveDeviceInfo
   */
  'GetActiveDeviceInfo'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetActiveDeviceInfo.Responses.$200>
  /**
   * GetMeterRealtimeData
   */
  'GetMeterRealtimeData'(
    parameters?: Parameters<Paths.GetMeterRealtimeData.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetMeterRealtimeData.Responses.$200>
  /**
   * GetOhmpilotRealtimeData
   */
  'GetOhmpilotRealtimeData'(
    parameters?: Parameters<Paths.GetOhmpilotRealtimeData.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetOhmpilotRealtimeData.Responses.$200>
  /**
   * GetStorageRealtimeData
   */
  'GetStorageRealtimeData'(
    parameters?: Parameters<Paths.GetStorageRealtimeData.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetStorageRealtimeData.Responses.$200>
}

export interface PathsDictionary {
  ['/solar_api/v1/GetInverterRealtimeData.cgi']: {
    /**
     * GetInverterRealtimeData
     */
    'get'(
      parameters?: Parameters<Paths.GetInverterRealtimeData.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetInverterRealtimeData.Responses.$200>
  }
  ['/solar_api/v1/GetInverterInfo.cgi']: {
    /**
     * GetInverterInfo
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetInverterInfo.Responses.$200>
  }
  ['/solar_api/v1/GetPowerFlowRealtimeData.fcgi']: {
    /**
     * GetPowerFlowRealtimeData
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetPowerFlowRealtimeData.Responses.$200>
  }
  ['/solar_api/v1/GetActiveDeviceInfo.cgi']: {
    /**
     * GetActiveDeviceInfo
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetActiveDeviceInfo.Responses.$200>
  }
  ['/solar_api/v1/GetMeterRealtimeData.cgi']: {
    /**
     * GetMeterRealtimeData
     */
    'get'(
      parameters?: Parameters<Paths.GetMeterRealtimeData.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetMeterRealtimeData.Responses.$200>
  }
  ['/solar_api/v1/GetOhmpilotRealtimeData.cgi']: {
    /**
     * GetOhmpilotRealtimeData
     */
    'get'(
      parameters?: Parameters<Paths.GetOhmpilotRealtimeData.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetOhmpilotRealtimeData.Responses.$200>
  }
  ['/solar_api/v1/GetStorageRealtimeData.cgi']: {
    /**
     * GetStorageRealtimeData
     */
    'get'(
      parameters?: Parameters<Paths.GetStorageRealtimeData.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetStorageRealtimeData.Responses.$200>
  }
}

export type Client = OpenAPIClient<OperationMethods, PathsDictionary>
