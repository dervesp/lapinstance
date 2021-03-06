/* tslint:disable */
/* eslint-disable */

export interface HttpClient<O> {

    request<R>(requestConfig: { method: string; url: string; queryParams?: any; data?: any; copyFn?: (data: R) => R; options?: O; }): RestResponse<R>;
}

export class RaidControllerClient<O> {

    constructor(protected httpClient: HttpClient<O>) {
    }

    /**
     * HTTP GET /raids
     * Java method: be.hehehe.lapinstance.controller.RaidController.findAllRaids
     */
    findAllRaids(options?: O): RestResponse<Raid[]> {
        return this.httpClient.request({ method: "GET", url: uriEncoding`raids`, options: options });
    }

    /**
     * HTTP POST /raids
     * Java method: be.hehehe.lapinstance.controller.RaidController.saveRaid
     */
    saveRaid(req: SaveRaidRequest, options?: O): RestResponse<Raid> {
        return this.httpClient.request({ method: "POST", url: uriEncoding`raids`, data: req, options: options });
    }

    /**
     * HTTP DELETE /raids/{id}
     * Java method: be.hehehe.lapinstance.controller.RaidController.deleteRaid
     */
    deleteRaid(id: number, options?: O): RestResponse<void> {
        return this.httpClient.request({ method: "DELETE", url: uriEncoding`raids/${id}`, options: options });
    }

    /**
     * HTTP GET /raids/{id}
     * Java method: be.hehehe.lapinstance.controller.RaidController.getRaid
     */
    getRaid(id: number, options?: O): RestResponse<Raid> {
        return this.httpClient.request({ method: "GET", url: uriEncoding`raids/${id}`, options: options });
    }

    /**
     * HTTP GET /raids/{raidId}/missingSubscriptions
     * Java method: be.hehehe.lapinstance.controller.RaidController.findMissingRaidSubscriptions
     */
    findMissingRaidSubscriptions(raidId: number, options?: O): RestResponse<User[]> {
        return this.httpClient.request({ method: "GET", url: uriEncoding`raids/${raidId}/missingSubscriptions`, options: options });
    }

    /**
     * HTTP POST /raids/{raidId}/missingSubscriptions/notify
     * Java method: be.hehehe.lapinstance.controller.RaidController.notifyMissingRaidSubscriptions
     */
    notifyMissingRaidSubscriptions(raidId: number, userIds: number[], options?: O): RestResponse<void> {
        return this.httpClient.request({ method: "POST", url: uriEncoding`raids/${raidId}/missingSubscriptions/notify`, data: userIds, options: options });
    }

    /**
     * HTTP GET /raids/{raidId}/subscriptions
     * Java method: be.hehehe.lapinstance.controller.RaidController.findRaidSubscriptions
     */
    findRaidSubscriptions(raidId: number, options?: O): RestResponse<RaidSubscription[]> {
        return this.httpClient.request({ method: "GET", url: uriEncoding`raids/${raidId}/subscriptions`, options: options });
    }

    /**
     * HTTP POST /raids/{raidId}/subscriptions
     * Java method: be.hehehe.lapinstance.controller.RaidController.saveRaidSubscription
     */
    saveRaidSubscription(raidId: number, req: SaveRaidSubscriptionRequest, options?: O): RestResponse<RaidSubscription> {
        return this.httpClient.request({ method: "POST", url: uriEncoding`raids/${raidId}/subscriptions`, data: req, options: options });
    }
}

export class RaidTextChannelControllerClient<O> {

    constructor(protected httpClient: HttpClient<O>) {
    }

    /**
     * HTTP GET /raidTextChannels
     * Java method: be.hehehe.lapinstance.controller.RaidTextChannelController.getAll
     */
    getAll(options?: O): RestResponse<RaidTextChannel[]> {
        return this.httpClient.request({ method: "GET", url: uriEncoding`raidTextChannels`, options: options });
    }
}

export class RaidTypeControllerClient<O> {

    constructor(protected httpClient: HttpClient<O>) {
    }

    /**
     * HTTP GET /raidTypes/{raidType}/nextReset
     * Java method: be.hehehe.lapinstance.controller.RaidTypeController.nextReset
     */
    nextReset(raidType: RaidType, queryParams: { from: number; until: number; }, options?: O): RestResponse<DateAsNumber[]> {
        return this.httpClient.request({ method: "GET", url: uriEncoding`raidTypes/${raidType}/nextReset`, queryParams: queryParams, options: options });
    }
}

export class SessionControllerClient<O> {

    constructor(protected httpClient: HttpClient<O>) {
    }

    /**
     * HTTP GET /session/user
     * Java method: be.hehehe.lapinstance.controller.SessionController.getCurrentUser
     */
    getCurrentUser(options?: O): RestResponse<Session> {
        return this.httpClient.request({ method: "GET", url: uriEncoding`session/user`, options: options });
    }
}

export class UserCharacterControllerClient<O> {

    constructor(protected httpClient: HttpClient<O>) {
    }

    /**
     * HTTP GET /userCharacters
     * Java method: be.hehehe.lapinstance.controller.UserCharacterController.findAllUserCharacters
     */
    findAllUserCharacters(options?: O): RestResponse<UserCharacter[]> {
        return this.httpClient.request({ method: "GET", url: uriEncoding`userCharacters`, options: options });
    }
}

export class UserControllerClient<O> {

    constructor(protected httpClient: HttpClient<O>) {
    }

    /**
     * HTTP GET /users
     * Java method: be.hehehe.lapinstance.controller.UserController.findAllUsers
     */
    findAllUsers(options?: O): RestResponse<User[]> {
        return this.httpClient.request({ method: "GET", url: uriEncoding`users`, options: options });
    }

    /**
     * HTTP GET /users/{userId}
     * Java method: be.hehehe.lapinstance.controller.UserController.getUser
     */
    getUser(userId: number, options?: O): RestResponse<User> {
        return this.httpClient.request({ method: "GET", url: uriEncoding`users/${userId}`, options: options });
    }

    /**
     * HTTP POST /users/{userId}
     * Java method: be.hehehe.lapinstance.controller.UserController.saveUser
     */
    saveUser(userId: number, req: SaveUserRequest, options?: O): RestResponse<User> {
        return this.httpClient.request({ method: "POST", url: uriEncoding`users/${userId}`, data: req, options: options });
    }

    /**
     * HTTP GET /users/{userId}/characters
     * Java method: be.hehehe.lapinstance.controller.UserController.findAllUserCharacters
     */
    findAllUserCharacters(userId: number, options?: O): RestResponse<UserCharacter[]> {
        return this.httpClient.request({ method: "GET", url: uriEncoding`users/${userId}/characters`, options: options });
    }

    /**
     * HTTP POST /users/{userId}/characters
     * Java method: be.hehehe.lapinstance.controller.UserController.saveUserCharacter
     */
    saveUserCharacter(userId: number, req: SaveUserCharacterRequest, options?: O): RestResponse<UserCharacter> {
        return this.httpClient.request({ method: "POST", url: uriEncoding`users/${userId}/characters`, data: req, options: options });
    }

    /**
     * HTTP GET /users/{userId}/subscriptions
     * Java method: be.hehehe.lapinstance.controller.UserController.findAllSubscriptions
     */
    findAllSubscriptions(userId: number, options?: O): RestResponse<RaidSubscription[]> {
        return this.httpClient.request({ method: "GET", url: uriEncoding`users/${userId}/subscriptions`, options: options });
    }
}

export interface AbstractModel {
    id: number;
}

export interface Raid extends AbstractModel {
    comment?: string;
    date: DateAsNumber;
    discordMessageId?: string;
    discordTextChannelId: string;
    formattedDate?: string;
    raidType: RaidType;
}

export interface RaidParticipant extends AbstractModel {
    character: UserCharacter;
    raid: Raid;
}

export interface RaidSubscription extends AbstractModel {
    character?: UserCharacter;
    date: DateAsNumber;
    raid: Raid;
    response: RaidSubscriptionResponse;
    user: User;
}

export interface RaidTextChannel {
    id: string;
    name: string;
}

export interface SaveRaidRequest {
    comment?: string;
    date: DateAsNumber;
    raidId?: number;
    raidTextChannelId: string;
    raidType: RaidType;
}

export interface SaveRaidSubscriptionRequest {
    characterId?: number;
    response: RaidSubscriptionResponse;
    userId: number;
}

export interface SaveUserCharacterRequest {
    characterId?: number;
    main: boolean;
    name: string;
    spec: CharacterSpec;
}

export interface SaveUserRequest {
    disabled: boolean;
}

export interface Session {
    roles: UserRole[];
    user: User;
}

export interface User extends AbstractModel {
    disabled: boolean;
    discordId: string;
    name: string;
}

export interface UserCharacter extends AbstractModel {
    main: boolean;
    name: string;
    spec: CharacterSpec;
    user: User;
}

export type DateAsNumber = number;

export type RestResponse<R> = Promise<Axios.GenericAxiosResponse<R>>;

export enum CharacterClass {
    WARRIOR = "WARRIOR",
    PALADIN = "PALADIN",
    DRUID = "DRUID",
    PRIEST = "PRIEST",
    ROGUE = "ROGUE",
    MAGE = "MAGE",
    SHAMAN = "SHAMAN",
    WARLOCK = "WARLOCK",
    HUNTER = "HUNTER",
}

export enum CharacterRole {
    HEAL = "HEAL",
    TANK = "TANK",
    DPS_RANGED = "DPS_RANGED",
    DPS_CAC = "DPS_CAC",
}

export enum CharacterSpec {
    WARRIOR_TANK = "WARRIOR_TANK",
    PALADIN_PROT = "PALADIN_PROT",
    DRUID_TANK = "DRUID_TANK",
    PRIEST_HEAL = "PRIEST_HEAL",
    PALADIN_HEAL = "PALADIN_HEAL",
    DRUID_RESTO = "DRUID_RESTO",
    SHAMAN_RESTO = "SHAMAN_RESTO",
    ROGUE = "ROGUE",
    WARRIOR_DPS = "WARRIOR_DPS",
    PALADIN_RET = "PALADIN_RET",
    DRUID_CAT = "DRUID_CAT",
    SHAMAN_ENH = "SHAMAN_ENH",
    MAGE = "MAGE",
    WARLOCK = "WARLOCK",
    HUNTER = "HUNTER",
    PRIEST_SHADOW = "PRIEST_SHADOW",
    DRUID_BALANCE = "DRUID_BALANCE",
    SHAMAN_ELEM = "SHAMAN_ELEM",
}

export enum RaidSubscriptionResponse {
    PRESENT = "PRESENT",
    LATE = "LATE",
    BENCH = "BENCH",
    ABSENT = "ABSENT",
}

export enum RaidType {
    ONYXIA = "ONYXIA",
    MOLTEN_CORE = "MOLTEN_CORE",
    ZUL_GURUB = "ZUL_GURUB",
    BLACKWING_LAIR = "BLACKWING_LAIR",
    AHN_QIRAJ_20 = "AHN_QIRAJ_20",
    AHN_QIRAJ_40 = "AHN_QIRAJ_40",
    NAXXRAMAS = "NAXXRAMAS",
    PVP = "PVP",
    OTHER = "OTHER",
}

export enum UserRole {
    ADMIN = "ADMIN",
    USER = "USER",
}

function uriEncoding(template: TemplateStringsArray, ...substitutions: any[]): string {
    let result = "";
    for (let i = 0; i < substitutions.length; i++) {
        result += template[i];
        result += encodeURIComponent(substitutions[i]);
    }
    result += template[template.length - 1];
    return result;
}


// Added by 'AxiosClientExtension' extension

import axios from "axios";
import * as Axios from "axios";

declare module "axios" {
    export interface GenericAxiosResponse<R> extends Axios.AxiosResponse {
        data: R;
    }
}

class AxiosHttpClient implements HttpClient<Axios.AxiosRequestConfig> {

    constructor(private axios: Axios.AxiosInstance) {
    }

    request<R>(requestConfig: { method: string; url: string; queryParams?: any; data?: any; copyFn?: (data: R) => R; options?: Axios.AxiosRequestConfig; }): RestResponse<R> {
        function assign(target: any, source?: any) {
            if (source != undefined) {
                for (const key in source) {
                    if (source.hasOwnProperty(key)) {
                        target[key] = source[key];
                    }
                }
            }
            return target;
        }

        const config: Axios.AxiosRequestConfig = {};
        config.method = requestConfig.method as typeof config.method;  // `string` in axios 0.16.0, `Method` in axios 0.19.0
        config.url = requestConfig.url;
        config.params = requestConfig.queryParams;
        config.data = requestConfig.data;
        assign(config, requestConfig.options);
        const copyFn = requestConfig.copyFn;

        const axiosResponse = this.axios.request(config);
        return axiosResponse.then(axiosResponse => {
            if (copyFn && axiosResponse.data) {
                (axiosResponse as any).originalData = axiosResponse.data;
                axiosResponse.data = copyFn(axiosResponse.data);
            }
            return axiosResponse;
        });
    }
}

export class AxiosRaidControllerClient extends RaidControllerClient<Axios.AxiosRequestConfig> {

    constructor(baseURL: string, axiosInstance: Axios.AxiosInstance = axios.create()) {
        axiosInstance.defaults.baseURL = baseURL;
        super(new AxiosHttpClient(axiosInstance));
    }
}

export class AxiosRaidTextChannelControllerClient extends RaidTextChannelControllerClient<Axios.AxiosRequestConfig> {

    constructor(baseURL: string, axiosInstance: Axios.AxiosInstance = axios.create()) {
        axiosInstance.defaults.baseURL = baseURL;
        super(new AxiosHttpClient(axiosInstance));
    }
}

export class AxiosRaidTypeControllerClient extends RaidTypeControllerClient<Axios.AxiosRequestConfig> {

    constructor(baseURL: string, axiosInstance: Axios.AxiosInstance = axios.create()) {
        axiosInstance.defaults.baseURL = baseURL;
        super(new AxiosHttpClient(axiosInstance));
    }
}

export class AxiosSessionControllerClient extends SessionControllerClient<Axios.AxiosRequestConfig> {

    constructor(baseURL: string, axiosInstance: Axios.AxiosInstance = axios.create()) {
        axiosInstance.defaults.baseURL = baseURL;
        super(new AxiosHttpClient(axiosInstance));
    }
}

export class AxiosUserCharacterControllerClient extends UserCharacterControllerClient<Axios.AxiosRequestConfig> {

    constructor(baseURL: string, axiosInstance: Axios.AxiosInstance = axios.create()) {
        axiosInstance.defaults.baseURL = baseURL;
        super(new AxiosHttpClient(axiosInstance));
    }
}

export class AxiosUserControllerClient extends UserControllerClient<Axios.AxiosRequestConfig> {

    constructor(baseURL: string, axiosInstance: Axios.AxiosInstance = axios.create()) {
        axiosInstance.defaults.baseURL = baseURL;
        super(new AxiosHttpClient(axiosInstance));
    }
}
