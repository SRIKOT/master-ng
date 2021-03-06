import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { FunctionSetting } from '../../../../shared/functionSetting';

import { Role } from './role.model';


@Injectable({
  providedIn: 'root'
})
export class RoleManageService {
  constructor(
    private http: HttpClient,
    private functionSetting: FunctionSetting
  ) {
  }

  listRolesState(): Observable<Role[]> {
    return this.http.get<Role[]>(this.functionSetting.API + 'role/listRole');
  }

  getRoleState(id: number): Observable<Role> {
    return this.http.get<Role>(this.functionSetting.API + 'role/getRole/' + id);
  }
  updateRole(row: Role): Observable<Role> {
    return this.http.post<Role>(this.functionSetting.API + 'role/addEditRole', row);
  }

  deleteRole(id: number) {
    return this.http.delete<Role>(this.functionSetting.API + 'role/deleteRole/' + id);
  }
}
