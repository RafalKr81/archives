import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Message } from '@archives/api-interfaces';
import { AuthService } from '@auth0/auth0-angular';
import { take } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Component({
  selector: 'arc-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  user: any;

  constructor(public auth: AuthService, private http: HttpClient) {}

  ngOnInit(): void {
    // fixme: remove from this method
    console.log('Admin component init, backend URL', environment.backendApi);

    this.auth.user$.pipe(take(1)).subscribe((profile) => {
      this.user = profile;
      console.log('Profile:', JSON.stringify(profile, null, 2));

      this.http
        .get<Message>(environment.backendApi + '/hello')
        .subscribe((data) => console.log('Received form API:', data));
    });
  }
}
