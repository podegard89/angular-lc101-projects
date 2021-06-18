import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-set-table',
  templateUrl: './skill-set-table.component.html',
  styleUrls: ['./skill-set-table.component.css']
})
export class SkillSetTableComponent implements OnInit {
  skills: object[] = [
    {name: "Loops", subSkill1: "For Loops", subSkill2: "For...Of Loops"},
    {name: "Conditionals", subSkill1: "If statements", subSkill2: "*ngIf statements"},
    {name: "Functions", subSkill1: "Anonymous", subSkill2: "methods"},
    {name: "Classes", subSkill1: "JS Classes", subSkill2: "TS Classes"},
    {name: "Modules", subSkill1: "Import", subSkill2: "Export"}
  ];

  constructor() { }

  ngOnInit() {
  }

  anonymousChange(skill): boolean {
    if(skill.subSkill1 === 'Anonymous') {
      return true;
    } else {
      return false;
    }
  }
}
